const GOOGLE_AI_SEARCH_BASE_URL = "https://www.google.com/search";
const CHATGPT_SEARCH_BASE_URL = "https://chatgpt.com/";
const PERPLEXITY_SEARCH_BASE_URL = "https://www.perplexity.ai/search";
const GROK_SEARCH_BASE_URL = "https://grok.com/";

export function buildGoogleAiUrl(query: string): string {
  const url = new URL(GOOGLE_AI_SEARCH_BASE_URL);
  url.searchParams.set("q", query);
  url.searchParams.set("udm", "50");
  return url.toString();
}

export function buildChatGptUrl(query: string): string {
  const url = new URL(CHATGPT_SEARCH_BASE_URL);
  url.searchParams.set("q", query);
  return url.toString();
}

export function buildPerplexityUrl(query: string): string {
  const url = new URL(PERPLEXITY_SEARCH_BASE_URL);
  url.searchParams.set("q", query);
  return url.toString();
}

export function buildGrokUrl(query: string): string {
  const url = new URL(GROK_SEARCH_BASE_URL);
  url.searchParams.set("q", query);
  return url.toString();
}
