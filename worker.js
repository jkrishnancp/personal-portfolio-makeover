/**
 * Cloudflare Worker — www.jayakrishnancp.com
 * Redirects all traffic to hello.jayakrishnancp.com (301 permanent)
 */
export default {
  async fetch(request) {
    const url = new URL(request.url);
    return Response.redirect(
      'https://hello.jayakrishnancp.com' + url.pathname + url.search,
      301
    );
  },
};
