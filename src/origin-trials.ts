const isEdge = /Edg(?:A|iOS)?\//.test(navigator.userAgent);
const isChrome = !isEdge && /(?:Chrome|Chromium)\//.test(navigator.userAgent);
const originTrialToken = isEdge
  ? import.meta.env.VITE_EDGE_WEB_MCP_ORIGIN_TRIAL_TOKEN
  : isChrome
    ? import.meta.env.VITE_GOOGLE_WEB_MCP_ORIGIN_TRIAL_TOKEN
    : undefined;

if (originTrialToken) {
  const tokenMetadata = document.createElement("meta");
  tokenMetadata.httpEquiv = "origin-trial";
  tokenMetadata.content = originTrialToken;
  document.head.append(tokenMetadata);
}
