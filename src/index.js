export default {
  async fetch(request, env, ctx) {
    const jsonContent = await env.MY_CONFIG_KV.get('versions_json');
    if (!jsonContent) {
      return new Response(JSON.stringify({ error: "Config key 'versions_json' not found in KV" }), {
        status: 404,
        headers: { 
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
    return new Response(jsonContent, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  },
};
