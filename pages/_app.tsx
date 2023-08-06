import "../styles/globals.css";
// pages/_app.js
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();
interface MyAppProps {
  Component: React.ElementType;
  pageProps: any;
}
function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
