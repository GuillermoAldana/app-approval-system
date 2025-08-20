'use client';

import { ReactNode } from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { Rubik } from 'next/font/google';
import { EmotionCacheProvider } from './emotion-cache';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const theme = createTheme({
  typography: {
    fontFamily: rubik.style.fontFamily,
  },
});

export function MuiThemeProvider({ children }: { children: ReactNode }) {
  return (
    <EmotionCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionCacheProvider>
  );
}
