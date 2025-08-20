import { ReactNode } from 'react';
import { MuiThemeProvider } from './theme-provider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <MuiThemeProvider>
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  );
}