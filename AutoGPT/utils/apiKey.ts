const GOOGLE_GEMINI_LS_KEY = "GOOGLE_GEMINI_API_KEY";
const OPENROUTER_LS_KEY = "OPENROUTER_API_KEY";

export function getAPIKey(service: "google-gemini" | "openrouter") {
    if (service === "google-gemini") {
        return window.localStorage.getItem(GOOGLE_GEMINI_LS_KEY);
    } else if (service === "openrouter") {
        return window.localStorage.getItem(OPENROUTER_LS_KEY);
    }
    return null;
}

export function setAPIKey(service: "google-gemini" | "openrouter", apiKey: string) {
    if (service === "google-gemini") {
        window.localStorage.setItem(GOOGLE_GEMINI_LS_KEY, apiKey);
    } else if (service === "openrouter") {
        window.localStorage.setItem(OPENROUTER_LS_KEY, apiKey);
    }
}

export function getGoogleGeminiAPIKey() {
    return window.localStorage.getItem(GOOGLE_GEMINI_LS_KEY);
}

export function setGoogleGeminiAPIKey(apiKey: string) {
    window.localStorage.setItem(GOOGLE_GEMINI_LS_KEY, apiKey);
}

export function getOpenRouterAPIKey() {
    return window.localStorage.getItem(OPENROUTER_LS_KEY);
}

export function setOpenRouterAPIKey(apiKey: string) {
    window.localStorage.setItem(OPENROUTER_LS_KEY, apiKey);
}
