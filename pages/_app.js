import '@/styles/globals.css'
import Header from './Components/header'
import Footer from './Components/footer'
import { useState, useEffect } from 'react'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {

  const router = useRouter()
  const [user, setUser] = useState()
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
      // setKey(Math.random())
    }
    console.log(user, myuser)


  }, [router.query])

  const logout = () => {
    localStorage.removeItem('myuser');
    setUser(); 
    router.push("/")
    toast.success('Sucessfully Logged out', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });  
  }


  return <>
  <ToastContainer/>
    <LoadingBar
      color='#FF4500'
      progress={progress}
      waitingTime={500}
      onLoaderFinished={() => setProgress(0)}
    />
    <Header logout={logout} user={user} />
    <Component user={user} {...pageProps} />
    <Footer />
  </>
}
