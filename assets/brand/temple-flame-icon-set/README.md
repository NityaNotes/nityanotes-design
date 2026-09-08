# Nitya Temple Flame icon exports

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
