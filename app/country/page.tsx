"use client";
import Link from 'next/link';
import React, { useState } from 'react'

const Countries = () => {
    interface sampledata {
        name: {
            common: string
        }
    }
    const [data, setData] = useState<sampledata[]>()
    const getdata = async () => {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        setData(data)
    }
    getdata();

    return (
        <div className='bg-gray-800 w-full'>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='text-center text-4xl font-bold text-white pt-10'>All Countries</h3>
                <Link href={'/'} className='text-center text-gray-300 underline pb-10'>Go Back to Home</Link>
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex gap-2 flex-wrap w-[95%] md:ml-0 ml-3 md:w-3/4 '>
                    {data?.map((country: sampledata, index: number) => {
                        return (
                            <Link className='px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-black transition-colors duration-300' href={`/country/${country.name.common}`} key={index}>{country.name.common}</Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Countries
