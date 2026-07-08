'use client';

import { useEffect } from 'react';
import { SITE } from '@/lib/site';

export function DownloadRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent;
    let target: string = SITE.webAppUrl;

    if (/android/i.test(ua)) {
      target = SITE.playStoreUrl || SITE.webAppUrl;
    } else if (/iphone|ipad|ipod/i.test(ua)) {
      target = SITE.appStoreUrl || SITE.webAppUrl;
    }

    window.location.replace(target);
  }, []);

  return null;
}
