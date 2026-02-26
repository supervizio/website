const ALLOWED_IPS = ${allowed_ips};
const BLOCK_PAGE = `${block_page}`;

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const clientIP = request.headers.get("CF-Connecting-IP") || "";
  if (ALLOWED_IPS.includes(clientIP)) {
    return fetch(request);
  }
  return new Response(BLOCK_PAGE, {
    status: 403,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Cache-Control": "no-store",
    },
  });
}
