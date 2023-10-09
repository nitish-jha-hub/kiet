import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Booksroom = () => {
    const router = useRouter()
    const [pdf, setPdf] = useState([])

    useEffect(() => {
        const fetchpdf = async () => {
            let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getpdfs`, {
                method: 'GET', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },

            })
            let res = await a.json()
            // console.log(res);
            setPdf(res)
        }
        if (!localStorage.getItem('myuser')) {
            router.push('/')
        }
        else {
            fetchpdf()
        }
    }, [router])




    return (
        <div>
            <ol>
                <li>1.Item 1</li>
            </ol>
            {pdf.map((item) => {
                return <div key={item._id} className="flex justify-between border-t border-b border-gray-200 py-2">
                    <span className="text-gray-500">{item.name}</span>
                    <Link legacyBehavior href={item.link} target="_blank"><a target="_blank" className='text-orange-600 font-serif font-semibold'>Download</a></Link>
                </div>
            })}

        </div>
    )
}

export default Booksroom