"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";

type ConsentState = "undecided" | "accepted" | "rejected";

const STORAGE_KEY = "thecleaningreport_consent_v1";

export function CookieConsent({ gaId }: { gaId?: string }) {
  const [consent, setConsent] = useState<ConsentState>(() => {
    if (typeof window === "undefined") return "undecided";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "accepted" || stored === "rejected" ? stored : "undecided";
  });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Hydration gate — flip once after mount so the banner doesn't render during SSR.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHydrated(true);
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  };

  const reject = () => {
    window.localStorage.setItem(STORAGE_KEY, "rejected");
    setConsent("rejected");
  };

  const showBanner = hydrated && consent === "undecided";
  const loadGoogleAnalytics = consent === "accepted" && !!gaId;

  return (
    <>
      {loadGoogleAnalytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#273640] bg-[#16212a] text-[#edf2ee] shadow-[0_-6px_24px_rgba(0,0,0,0.2)]"
        >
          <div className="site-shell flex flex-col gap-4 py-5 text-[0.95rem] leading-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-[#d5ded8]">
              We use cookies for analytics to understand how readers use the site. You can accept or reject at any time.
              See our{" "}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-white">
                privacy policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex flex-shrink-0 gap-3">
              <button
                type="button"
                onClick={reject}
                className="rounded-sm border border-[#5a6a74] px-4 py-2 text-sm font-medium text-[#edf2ee] transition-colors hover:bg-[#1c2831]"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={accept}
                className="rounded-sm bg-[#D4A574] px-4 py-2 text-sm font-semibold text-[#2C1810] transition-colors hover:brightness-95"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function useResetConsent() {
  return () => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };
}
