import { useEffect, useState } from "react";

export default function News(){
    const [news, setNews]=useState('');
    const [loading, setLoading]=useState(true);
    useEffect(() => {
        const fetchNews = async ()=>{
            setLoading(true);
            const response=await fetch("https://newsdata.io/api/1/news?apikey=pub_632466a5aa6511e78dbc61f50d68890bbbf2d&q=cricket ");
            const data=await response.json();
            setNews(data.results[3]);
            setLoading(false);
        }
        fetchNews();
    },[])
    return(
        <div>
            <h1>News</h1>
            <p>This is News</p>
            {loading ? <p>Loading...</p> : <div>
                <img style={{
                    width:"500px",
                    height:"300px",
                    borderRadius:"10px",
                }} src={news.image_url} alt={news.title}/>
                <h2>{news.title}</h2><p>{news.description}</p> </div>}
        </div>
    );
}