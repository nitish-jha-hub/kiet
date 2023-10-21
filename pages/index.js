import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home({user}) {
  // console.log(user);
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // useEffect(() => {
  //   if (localStorage.getItem('myuser')) {
  //     router.push('/')
  //   }
  // }, [router])


  const handleChange = (e) => {
    if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    if (e.target.name == 'password') {
      setPassword(e.target.value)
    }

  }

  const handleSubmit = async (e) => {
    // setLoading(true)
    e.preventDefault()
    const data = { email, password }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/loging`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response);
    setEmail('')
    setPassword('')
    // setLoading(false);

    if (response.success) {
      localStorage.setItem('myuser', JSON.stringify({ token: response.token, email: response.email }))
      toast.success('you are successfully logged in', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_HOST}`)
      }, 1000);
    }
    else {
      toast.error('Invalid login details', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }


  return (
    <div className='flex'>
      <ToastContainer />
      {/* logging component shows only if user is not present i.e-not logged in */}
      {!user&& <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} method='POST' className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <input value={email} onChange={handleChange} name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input value={password} onChange={handleChange} name="password" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
            </button>
            <Link href="/signup" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
              Sign Up
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>}

      {/* if user is present */}

    </div>
  )
}
