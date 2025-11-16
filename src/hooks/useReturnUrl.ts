import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "blogReferrer";

/**
 * Capture the external referrer (if any) and persist it so we can always link back
 * to the page the user came from instead of the default blog home page.
 */
export const useReturnUrl = (defaultUrl: string) => {
  const [returnUrl, setReturnUrl] = useState(defaultUrl);

  useEffect(() => {
    const updateUrl = (url: string | null) => {
      if (url) {
        localStorage.setItem(STORAGE_KEY, url);
        setReturnUrl(url);
      }
    };

    const storedUrl = localStorage.getItem(STORAGE_KEY);
    if (storedUrl) {
      setReturnUrl(storedUrl);
    }

    const referrer = document.referrer;
    if (referrer && !referrer.includes(window.location.host)) {
      updateUrl(referrer);
    }
  }, [defaultUrl]);

  const returnToReferrer = useCallback(() => {
    window.close();

    window.setTimeout(() => {
      window.location.assign(returnUrl);
    }, 200);
  }, [returnUrl]);

  return { returnUrl, returnToReferrer };
};
