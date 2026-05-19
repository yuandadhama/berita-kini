/**
 * Fetch the og:image meta tag from a given URL.
 * Returns empty string if not found or fetch fails.
 */
export async function scrapeOgImage(url: string): Promise<string> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 }, // cache 24 hours
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1)",
      },
    });

    if (!res.ok) return "";

    const html = await res.text();

    // Match og:image or twitter:image
    const match =
      html.match(
        /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
      ) ||
      html.match(
        /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
      ) ||
      html.match(
        /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
      );

    return match?.[1] ?? "";
  } catch {
    return "";
  }
}
