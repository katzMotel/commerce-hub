'use client';

import { ThemeProvider } from './ThemeProvider';
import { StoreProvider } from '@/lib/redux/StoreProvider';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </SessionProvider>
    </StoreProvider>
  );
}