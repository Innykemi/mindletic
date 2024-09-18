"use client";
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { ApolloProvider } from '@apollo/client';
// import client from '@/lib/apollo-client';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Psychologist Feedback</title>
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <ApolloProvider client={client}> */}
              {props.children}
            {/* </ApolloProvider> */}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
