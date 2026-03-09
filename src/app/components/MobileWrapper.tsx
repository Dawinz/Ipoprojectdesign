import { ReactNode, useEffect } from 'react';

interface MobileWrapperProps {
  children: ReactNode;
}

export function MobileWrapper({ children }: MobileWrapperProps) {
  useEffect(() => {
    // Set mobile viewport meta tag
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
    
    const existingMeta = document.querySelector('meta[name="viewport"]');
    if (existingMeta) {
      existingMeta.setAttribute('content', meta.content);
    } else {
      document.head.appendChild(meta);
    }

    // Set theme color for mobile browsers
    const themeColor = document.createElement('meta');
    themeColor.name = 'theme-color';
    themeColor.content = '#2F6BFF';
    
    const existingTheme = document.querySelector('meta[name="theme-color"]');
    if (existingTheme) {
      existingTheme.setAttribute('content', themeColor.content);
    } else {
      document.head.appendChild(themeColor);
    }

    // Set mobile web app capable
    const appleCapable = document.createElement('meta');
    appleCapable.name = 'apple-mobile-web-app-capable';
    appleCapable.content = 'yes';
    
    const existingApple = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
    if (!existingApple) {
      document.head.appendChild(appleCapable);
    }
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {children}
    </div>
  );
}
