"use client";

import { ReactNode } from 'react';
import { MuiThemeProvider } from './theme-provider';
import { store } from "@/store/store";
import { Provider } from 'react-redux';

import { Box } from '@mui/material';
import Navbar from '@/components/Navbar';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Provider store={store}>
          <MuiThemeProvider>
            <Box>
              <Navbar />
              <Box
                sx={{
                  m: 6,
                  maxWidth: 1200,
                  mx: "auto"
                }}
              >{children}</Box>
            </Box>
          </MuiThemeProvider>
        </Provider>

      </body>
    </html>
  );
} 