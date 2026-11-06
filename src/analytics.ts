const ANALYTICS_CONSENT_KEY = "elmvale_cookie_consent";

function analyticsAccepted() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === "accepted";
}

function getGtag() {
  if (typeof window === "undefined") return undefined;
  return (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
}

export function trackPageView() {
  if (!analyticsAccepted()) return;
  const gtag = getGtag();
  if (typeof gtag !== "function") return;

  gtag("event", "page_view", {
    send_to: "G-BRRFY9DWWK",
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.search,
  });
}

export function trackGa4Event(
  eventName: string,
  params: Record<string, string | number | boolean | undefined> = {}
) {
  if (!analyticsAccepted()) return;
  const gtag = getGtag();
  if (typeof gtag !== "function") return;

  gtag("event", eventName, {
    send_to: "G-BRRFY9DWWK",
    ...params,
  });
}

export function trackContactCta(sourcePage: string, ctaLabel: string) {
  trackGa4Event("contact_cta_click", {
    source_page: sourcePage,
    cta_label: ctaLabel,
  });
}

export function trackEmailClick(sourcePage: string) {
  trackGa4Event("email_click", {
    source_page: sourcePage,
    email_address: "contact@elmvaleglobal.com",
  });
}
