import '../styles/globals.css'
import {CartProvider} from '../context/cart'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

