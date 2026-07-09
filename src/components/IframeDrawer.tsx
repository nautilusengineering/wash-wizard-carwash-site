'use client';

import { useState, useEffect } from 'react';
import { NAUTILUS_ORG_SLUG } from '@/lib/utils';

const ANIMATION_DURATION = 500;

interface IframeDrawerProps {
  onClose: () => void;
  productId?: string;
  locationId?: string;
  title?: string;
}

export default function IframeDrawer({
  onClose,
  productId,
  locationId,
  title = 'Checkout',
}: IframeDrawerProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(() =>
    typeof window === 'undefined' ? 0 : window.innerHeight
  );

  const locId = locationId;
  const embedUrl = `https://www.nautilus-app.com/c/storefront/${NAUTILUS_ORG_SLUG}${locId ? `?locationId=${locId}` : '?'}${
    productId ? `&productId=${productId}` : ''
  }&embedded=true`;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), ANIMATION_DURATION);
  };

  useEffect(() => {
    const scrollY = window.scrollY;
    const html = document.documentElement;
    const body = document.body;
    html.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.overflow = 'hidden';

    return () => {
      html.style.overflow = '';
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.overflow = '';
      // Restore the scroll position instantly — bypass the global
      // `scroll-behavior: smooth` so closing the drawer doesn't animate a
      // jump-to-top-then-scroll-back.
      const prevScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollY);
      html.style.scrollBehavior = prevScrollBehavior;
    };
  }, []);

  useEffect(() => {
    const initialHeight = window.innerHeight;
    document.documentElement.style.setProperty('--app-height', `${initialHeight}px`);

    const updateHeight = () => {
      const currentHeight = window.innerHeight;
      setIsKeyboardVisible(initialHeight - currentHeight > 150);
      setViewportHeight(currentHeight);
      document.documentElement.style.setProperty(
        '--app-height',
        `${currentHeight}px`
      );
    };

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --app-height: 100vh;
          --safe-area-top: env(safe-area-inset-top, 0px);
          --safe-area-bottom: env(safe-area-inset-bottom, 0px);
        }
        @supports (height: 100dvh) {
          :root {
            --app-height: 100dvh;
          }
        }
        .payment-drawer-mobile {
          padding-bottom: max(var(--safe-area-bottom), 8px);
        }
        .drawer-overlay {
          opacity: 0;
          transition: opacity 500ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .drawer-overlay.open {
          opacity: 1;
        }
        .drawer-content {
          transform: translateX(100%);
          transition: transform 500ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .drawer-content.open {
          transform: translateX(0);
        }
      `}</style>

      <div
        className={`fixed inset-0 bg-black/60 z-[51] drawer-overlay ${
          !isClosing ? 'open' : ''
        }`}
        onClick={handleClose}
      />

      <div className="fixed inset-0 z-[52]" onClick={handleClose}>
        <div
          className={`ml-auto h-full w-full md:max-w-[500px] bg-white flex flex-col drawer-content ${
            !isClosing ? 'open' : ''
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ height: isKeyboardVisible ? `${viewportHeight}px` : '100%' }}
        >
          <div
            className="px-4 py-3 border-b border-gray-200 flex justify-between items-center flex-shrink-0 bg-primary text-white"
            style={{ paddingTop: 'max(0.75rem, var(--safe-area-top))' }}
          >
            <h2 className="text-lg font-heading font-bold uppercase tracking-wide">
              {title}
            </h2>
            <button
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/15 transition-colors"
              aria-label="Close"
              type="button"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 relative overflow-hidden overscroll-contain payment-drawer-mobile">
            <iframe
              src={embedUrl}
              className="w-full h-full border-0 overscroll-contain"
              title={title}
              allow="payment"
              onLoad={() => setIframeLoaded(true)}
            />

            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin" />
                  <p className="text-primary font-bold uppercase tracking-wider text-sm">
                    Summoning your wash...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
