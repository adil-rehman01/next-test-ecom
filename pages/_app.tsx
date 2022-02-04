import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Admin from '../components/Layouts/admin'
import Main from '../components/Layouts/main'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    router.pathname.search('/dashboard')!=-1 ? (
      <Admin>
        <Component {...pageProps} />
      </Admin>
    ) : (
      <Main>
        <Component {...pageProps} />
      </Main>
    )
  )
}

export default MyApp
