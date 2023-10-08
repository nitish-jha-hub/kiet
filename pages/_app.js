import '@/styles/globals.css'
import Header from './Components/header'
import Footer from './Components/footer'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {

  const router = useRouter()
  const [user, setUser] = useState("")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })


    const myuser = JSON.parse(localStorage.getItem("myuser"))

    if (myuser) {
      setUser({ token: myuser.token, email: myuser.email })
      console.log(user)
      // setKey(Math.random())
    }


  }, [router.query])

  const logout = () => {
    localStorage.removeItem('myuser')
    setUser()
    // setKey(Math.random())
    // router.push('/')
  }




  return <>
    <LoadingBar
      color='#FF4500'
      progress={progress}
      waitingTime={500}
      onLoaderFinished={() => setProgress(0)}
    />
    <Header user={user} />
    <Component user={user} {...pageProps} />
    <Footer />
  </>
}
