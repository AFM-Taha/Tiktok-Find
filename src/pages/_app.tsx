import Layout from '@/components/layouts';
import { SearchContextProvider } from '@/contexts/SearchContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchContextProvider>
  );
}
