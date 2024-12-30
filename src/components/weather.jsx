import { useEffect, useState } from "react";

export default function Weather(){
    const [weather, setWeather]=useState('');
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        const fetchWeather= async() => {
            setLoading(true);
            const response=await fetch("https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=FQ8E2fgwS1yt2ZGeXSxAxlXaw5KnbMKZ");
            const data=await response.json();
            setWeather(data.timelines.minutely[0]);
            setLoading(false);
        }
        fetchWeather();
    },[])
    return(
        <div>
            <h1>Todays Weather</h1>
            <p>This is todays Weather</p>
            {loading ? <p>Loading...</p> : <div style={{
                width:"500px",
                height:"100px",
            }}>
                <p>Temperature :</p>{weather.values.temperature}*C 
                <br />
                <p>Wind Speed :</p>{weather.values.windSpeed}m/s
                </div>}
        </div>
    );
}