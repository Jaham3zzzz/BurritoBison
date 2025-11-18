import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

export default {
  async fetch(request, env, ctx) {
    try {
      return await getAssetFromKV({ request, waitUntil: ctx.waitUntil }, env);
    } catch (e) {
      return new Response("Asset not found: " + e.message, { status: 404 });
    }
  }
};
