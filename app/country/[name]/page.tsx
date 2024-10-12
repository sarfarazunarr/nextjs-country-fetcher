"use client";
import Image from 'next/image';
import Loading from '@/app/loading';
import React, { useState } from 'react'

const CountryData = ({ params }: { params: { name: string } }) => {
    interface Country {
        name: {
            common: string;
            official: string;
        };
        area: number;
        region: string;
        population: number;
        borders: string[];
        capital: string[];
        languages: {
            [key: string]: string;
        };
        flags: {
            png: string
        };
    }

    const [data, setData] = useState<Country[]>({
        name: {
            common: "",
            official: "",
        },
        area: 0,
        region: "",
        population: 0,
        borders: [],
        capital: [],
        languages: {},
        flag: {
            png: ""
        },
    });

    async function getdata() {
        const res = await fetch(`https://restcountries.com/v3.1/name/${params.name}`);
        const data = await res.json();
        setData(data);
    }
    getdata();
    return (
        <div>
            {!data && <Loading />}
            {data && (
                <div className='flex flex-col items-center justify-center gap-y-3 p-4 bg-gray-800 rounded-md shadow-md h-screen'>
                    <div className='flex items-center justify-center my-4'>
                        <Image width={300} height={300} src={data[0]?.flags.png} alt={data[0]?.name?.common}  />
                    </div>
                    <h1 className='text-center text-3xl font-semibold text-white'><span>{data[0]?.name?.common}</span></h1>
                    <div className='flex flex-col gap-y-2 text-gray-300 font-normal'>
                        <p>Area: <span className='font-semibold'>{data[0]?.area}</span> km<sup>2</sup></p>
                        <p>Region: <span className='font-semibold'>{data[0]?.region}</span></p>
                        <p>Population: <span className='font-semibold'>{data[0]?.population}</span></p>
                        <p>Borders: <span className='font-semibold'>{data[0]?.borders?.length ? data[0]?.borders.join(', ') : "None"}</span></p>
                        <p>Capital: <span className='font-semibold'>{data[0]?.capital.map((cap) => (cap)).join(', ')}</span></p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CountryData