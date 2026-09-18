export default {
  async fetch(request, env, ctx) {
    const url = `https://raw.githubusercontent.com/caijunlin/version-detector-config/main/versions.json?t=${Date.now()}`;
    const response = await fetch(url);
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Access-Control-Allow-Origin', '*');
    newResponse.headers.set('Content-Type', 'application/json; charset=utf-8');
    newResponse.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    newResponse.headers.set('Pragma', 'no-cache');
    newResponse.headers.set('Expires', '0');
    return newResponse;
  },
};
