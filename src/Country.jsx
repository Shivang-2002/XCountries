import { useEffect, useState } from "react";

const CountryCard = ({name, flag, abbr}) => {
    return (
        <div 
        style={{
            border: "1px solid grey",
            width: "200px",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            borderRadius: "5px"
        }}
        >
            <img style={{height: "100px", width: "100px "}} src={flag} alt={abbr}/>
            <h2>{name}</h2>
        </div>
    )
}

export default function Country(){
    const API = "https://xcountries-backend.azurewebsites.net/all";
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then((jsonData) => setData(jsonData));
    }, []);

    return (
        <div 
        style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4px "
        }}
        >
            {data.map(({name, flag, abbr}) => <CountryCard key={abbr} name={name} flag={flag} abbr={abbr}/>)}
        </div>
    )

}
