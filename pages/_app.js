import '@/styles/globals.css'
import Header from './Components/header'
import Footer from './Components/footer'

export default function App({ Component, pageProps }) {
  return<>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </> 
}
