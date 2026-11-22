import { Product } from '../types.ts';

export const DEFAULT_AFFILIATE_LETTER = 'TC-PARTNER';

const STORAGE_KEY_LETTER = 'techcrystal_affiliate_letter';
const STORAGE_KEY_PRODUCT_LINKS = 'techcrystal_product_custom_links';

export function getStoredAffiliateLetter(): string {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_LETTER);
    return saved && saved.trim() !== '' ? saved.trim() : DEFAULT_AFFILIATE_LETTER;
  } catch {
    return DEFAULT_AFFILIATE_LETTER;
  }
}

export function saveAffiliateLetter(letter: string): void {
  try {
    localStorage.setItem(STORAGE_KEY_LETTER, letter.trim());
  } catch (e) {
    console.error('Failed to save affiliate letter', e);
  }
}

export function getCustomProductLinks(): Record<string, string> {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_PRODUCT_LINKS);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

export function saveCustomProductLink(productId: string, url: string): void {
  try {
    const existing = getCustomProductLinks();
    if (url.trim()) {
      existing[productId] = url.trim();
    } else {
      delete existing[productId];
    }
    localStorage.setItem(STORAGE_KEY_PRODUCT_LINKS, JSON.stringify(existing));
  } catch (e) {
    console.error('Failed to save custom product link', e);
  }
}

export function buildAffiliateUrl(product: Product, customLetter?: string): string {
  const customLinks = getCustomProductLinks();
  
  // If the user entered a direct custom affiliate link for this product, use it directly
  if (customLinks[product.id] && customLinks[product.id].trim() !== '') {
    return customLinks[product.id].trim();
  }

  const letter = customLetter || getStoredAffiliateLetter();
  const baseUrl = product.affiliateUrl || `https://store.${product.brand.toLowerCase()}.com/products/${product.id}`;

  // Preserve direct affiliate shortlinks (e.g. link.amazon, amzn.to) verbatim
  if (/^https?:\/\/(link\.amazon|amzn\.(to|in|eu|asia)|a\.co)\//i.test(baseUrl)) {
    return baseUrl;
  }

  // Append affiliate letter/parameter cleanly
  try {
    const parsed = new URL(baseUrl);
    parsed.searchParams.set('aff', letter);
    parsed.searchParams.set('ref', letter);
    return parsed.toString();
  } catch {
    // If not a full URL with scheme, return standard link with query
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}aff=${encodeURIComponent(letter)}`;
  }
}
