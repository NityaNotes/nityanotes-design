"""Trace the approved raster silhouette and export matched vector/raster icons.

Requires pillow, numpy, vtracer and resvg-py. Run from any directory.
"""

from io import BytesIO
from pathlib import Path
import json
import xml.etree.ElementTree as ET
import zipfile

import numpy as np
from PIL import Image, ImageDraw
import resvg_py
import vtracer

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "temple-flame-icon-set"
SIZES = [16, 20, 24, 29, 32, 40, 48, 58, 60, 64, 72, 76, 80, 87, 96,
         114, 120, 128, 144, 152, 167, 180, 192, 256, 384, 512, 1024, 2048]
SOURCE = ROOT / "nitya-icon-draft-v3-temple-flame.png"
pixels = np.asarray(Image.open(SOURCE).convert("RGB")).astype(int)
height, width = pixels.shape[:2]
assert height == width
mark_mask = (pixels[:, :, 0] - pixels[:, :, 1] > 45) & (pixels[:, :, 0] > 100)
tile_mask = pixels.max(axis=2) > 7


def trace(mask, fill):
    buffer = BytesIO()
    Image.fromarray(np.where(mask, 0, 255).astype("uint8")).resize(
        (width * 4, height * 4), Image.Resampling.NEAREST
    ).save(buffer, format="PNG")
    svg = vtracer.convert_raw_image_to_svg(
        buffer.getvalue(), img_format="png", colormode="binary", mode="spline",
        filter_speckle=8, corner_threshold=60, length_threshold=3.5,
        max_iterations=10, splice_threshold=45, path_precision=3,
    )
    root = ET.fromstring(svg)
    paths = []
    for element in root:
        if element.tag.endswith("path"):
            attributes = {**element.attrib, "fill": fill}
            paths.append("<path " + " ".join(f'{key}="{value}"' for key, value in attributes.items()) + "/>")
    return '<g transform="scale(0.25)">' + "\n".join(paths) + '</g>'


tile = trace(tile_mask, "#141414")
mark = trace(mark_mask, "#ff805d")


def svg_at(size, square=False):
    background = f'<rect width="{width}" height="{height}" fill="#141414"/>' if square else tile
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" '
            f'viewBox="0 0 {width} {height}" preserveAspectRatio="xMidYMid meet">\n'
            '<title>Nitya — Temple Flame</title>\n' + background + "\n" + mark + "\n</svg>\n")


for folder in ["png", "svg", "square/png", "square/svg"]:
    (OUTPUT / folder).mkdir(parents=True, exist_ok=True)

for square in [False, True]:
    base = OUTPUT / "square" if square else OUTPUT
    for size in SIZES:
        svg = svg_at(size, square)
        (base / "svg" / f"nitya-{size}.svg").write_text(svg)
        # Supersampling keeps fine tips and diagonals smooth at favicon sizes.
        render_size = max(size, min(size * 4, 2048))
        rendered = resvg_py.svg_to_bytes(svg_string=svg, width=render_size, height=render_size)
        png = Image.open(BytesIO(rendered)).convert("RGBA")
        if render_size != size:
            png = png.resize((size, size), Image.Resampling.LANCZOS)
        png.save(base / "png" / f"nitya-{size}.png", optimize=True)

(OUTPUT / "nitya-master.svg").write_text(svg_at(2048))
(OUTPUT / "favicon.svg").write_text(svg_at(32))
Image.open(OUTPUT / "png/nitya-256.png").save(
    OUTPUT / "favicon.ico", sizes=[(n, n) for n in [16, 24, 32, 48, 64, 128, 256]],
    append_images=[Image.open(OUTPUT / "png" / f"nitya-{n}.png") for n in [16, 24, 32, 48, 64, 128]],
)

# Compare the trace with the source silhouette at the original resolution.
rendered = np.asarray(Image.open(BytesIO(resvg_py.svg_to_bytes(svg_string=svg_at(width)))))
traced_mask = (rendered[:, :, 0].astype(int) - rendered[:, :, 1].astype(int) > 45) & (rendered[:, :, 0] > 100)
iou = float((mark_mask & traced_mask).sum() / (mark_mask | traced_mask).sum())
assert iou > 0.99, f"Trace fidelity below threshold: {iou}"
for path in OUTPUT.rglob("*.png"):
    size = int(path.stem.split("-")[-1])
    assert Image.open(path).size == (size, size)
for path in OUTPUT.rglob("*.svg"):
    root = ET.parse(path).getroot()
    assert not any(element.tag.endswith("image") for element in root.iter())

preview = Image.new("RGB", (1120, 700), "#e8e8e8")
draw = ImageDraw.Draw(preview)
draft = Image.open(SOURCE).convert("RGBA").resize((480, 480), Image.Resampling.LANCZOS)
master = Image.open(OUTPUT / "png/nitya-512.png").resize((480, 480), Image.Resampling.LANCZOS)
preview.paste(draft, (40, 45), draft)
preview.paste(master, (600, 45), master)
draw.text((40, 20), "Original draft", fill="#141414")
draw.text((600, 20), "Vector export / exact brand colors", fill="#141414")
x = 40
for size in [16, 24, 32, 48, 64, 96]:
    icon = Image.open(OUTPUT / "png" / f"nitya-{size}.png")
    preview.paste(icon, (x, 565), icon)
    draw.text((x, 670), str(size) + " px", fill="#141414")
    x += size + 45
preview.save(OUTPUT / "preview.png")
report = {"sizes": SIZES, "source_size": width, "silhouette_iou": round(iou, 6),
          "colors": {"mark": "#ff805d", "background": "#141414"},
          "png_svg_pairs": len(SIZES) * 2}
(OUTPUT / "validation.json").write_text(json.dumps(report, indent=2) + "\n")
(OUTPUT / "README.md").write_text("""# Nitya Temple Flame icon exports

`png/` and `svg/` contain matching rounded icons with transparent outer corners.
`square/` contains matching opaque square backgrounds for systems that apply their own icon mask.
Both retain the traced emblem at the original position and proportions.

`nitya-master.svg` is the editable vector master. All SVGs contain real paths, with no embedded bitmap.
`favicon.svg` and `favicon.ico` are browser assets; ICO includes 16, 24, 32, 48, 64, 128 and 256 px frames.
For an Apple touch icon, use `square/png/nitya-180.png`; common web-app sizes are 192 and 512.
The 1024 and 2048 exports are suitable large source assets. Platform-specific store artwork may need additional preparation.

Sizes: 16, 20, 24, 29, 32, 40, 48, 58, 60, 64, 72, 76, 80, 87, 96, 114, 120, 128, 144, 152, 167, 180, 192, 256, 384, 512, 1024, 2048.

The source raster's contours were traced, preserving spacing and aspect ratio. Generated surface texture was flattened to exact brand fills: Temple Flame 400 (#ff805d) and Reading Ink 950 (#141414). This is a vector reconstruction, not a pixel-identical copy of the raster texture. Small icons keep the original geometry and use antialiasing; fine details naturally become less visible at 16 px.

`preview.png` compares the original and vector export and shows small sizes.
`validation.json` records silhouette overlap and output checks.
Regenerate with `../export-icons.py` (requires pillow, numpy, vtracer, resvg-py).
""")
with zipfile.ZipFile(ROOT / "nitya-temple-flame-icon-set.zip", "w", zipfile.ZIP_DEFLATED) as archive:
    for path in sorted(OUTPUT.rglob("*")):
        if path.is_file():
            archive.write(path, path.relative_to(ROOT))
print(json.dumps(report, indent=2))
