export const REGEX_HTTP = /^(http|https):/gm;

/**
 *  HTTPS: or HTTP ???
 *
 * @param {string} url format E164
 * @returns {boolean} return true or false
 */
export function isHTTPS(url: string): boolean {
  REGEX_HTTP.lastIndex = 0;
  if (typeof url != "string") return false;

  return REGEX_HTTP.test(url);
}