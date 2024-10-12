import React from 'react'
import { FaSearchLocation } from 'react-icons/fa'
import { Country } from './data'
import Link from 'next/link'

const CountryUI = ({ changeFunction, logicFunction, data, value } : { changeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void, logicFunction: () => void, data ?: Country[], value: string}) => {
    return (
        <main className='flex flex-col justify-center items-center w-[90%] md:w-full h-screen mx-auto'>
            <div>
                <h1 className='text-center text-4xl font-semibold text-white uppercase'>Know every country!</h1>
                <div className='bg-gray-800 p-5 rounded-md w-auto'>
                    <label htmlFor="countryname" className='text-left text-gray-300 font-semibold'>Country Name</label>
                    <input type="text" id="countryname" name='countryname' className='w-full p-2 rounded-md outline-none border border-gray-600 focus:border-green-400 transition-all duration-300 bg-transparent placeholder:text-gray-500' placeholder='e.g, Pakistan' onChange={changeFunction} value={value} />
                    <button className='w-full p-2 rounded-md bg-green-700 text-white font-semibold hover:bg-green-900 px-3 my-3 inline-flex items-center justify-center gap-4' onClick={logicFunction}><FaSearchLocation size={20} /> Search</button>
                </div>
                <div className='bg-gray-800 p-5 rounded-md'>
                    {data?.map((country: Country, index: number) => {
                        return (
                            <div key={index}>
                                <p className='text-left text-gray-300 '>Country Name: <span className='text-green-400 font-semibold px-3'>{country.name}</span></p>
                                <p className='text-left text-gray-300 '>Area <span className='text-green-400 font-semibold px-3'>{country.area}</span></p>
                                <p className='text-left text-gray-300 '>Region <span className='text-green-400 font-semibold px-3'>{country.region}</span></p>
                                <p className='text-left text-gray-300 '>Population<span className='text-green-400 font-semibold px-3'>{country.population}</span></p>
                            </div>
                        )
                    })}
                    <Link href={"/country"} className='text-center text-gray-300 underline mt-3'>View All Countries</Link>
                </div>
            </div>
        </main>
    )
}

export default CountryUI
