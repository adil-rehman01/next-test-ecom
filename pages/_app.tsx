import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Admin from '../components/Layouts/admin'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    router.pathname.search('/dashboard')!=-1 ? (
      <Admin>
        <Component {...pageProps} />
      </Admin>
    ) : (
      <Component {...pageProps} />
    )
  )
}

export default MyApp
