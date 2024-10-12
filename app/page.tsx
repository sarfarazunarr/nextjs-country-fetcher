"use client";
import CountryUI from "./CountryUI";
import { useState } from "react";
import countrydata, { Country } from "./data";

export default function Home() {
  const [countryname, setCountryname] = useState("");
  const [data, setData] = useState<Country[]>([]);
  function getdata(){
    console.log(countryname);
    
    const response = countrydata.filter((info) => info.name === countryname);
    if(response.length === 0){
      alert("Country Not Found");
      return;
    }
    setData(data);
  }

  return (
    <CountryUI changeFunction={(event) => setCountryname(event.target.value)} logicFunction={getdata} value={countryname} data={data} />
  );
}
