export function trackGa4Event(
  eventName: string,
  params: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
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
