import { useEffect, useState } from "react";

function Recommend(){
    const movieGenres=JSON.parse(localStorage.getItem("selected"));
    const [movies, setMovies]=useState([])
    const [loading, setLoading]=useState(true)
    const response=
    useEffect(()=>{
        const fetchMoviesInfo = async (id) => {
            const url = `https://moviesminidatabase.p.rapidapi.com/movie/id/${id}/`;
            const options = {
              method: 'GET',
              headers: {
                'x-rapidapi-key': '68a0601cc0msh8bf2b4c7555c7e3p1e3309jsn3a1f1036e4cb',
                'x-rapidapi-host': 'moviesminidatabase.p.rapidapi.com'
              }
            };
            
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setMovies(prevState => [...prevState, result])
            } catch (error) {
                console.error(error);
            }
            finally{
                setLoading(false);
            }
        }
        const fectchMovies = async () =>{
            const url = `https://moviesminidatabase.p.rapidapi.com/movie/byGen/${movieGenres[0]}/`;
            const options = {
              method: 'GET',
              headers: {
                'x-rapidapi-key': '68a0601cc0msh8bf2b4c7555c7e3p1e3309jsn3a1f1036e4cb',
                'x-rapidapi-host': 'moviesminidatabase.p.rapidapi.com'

                
                   
              }
            };
            
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                result.results.forEach((movie, idx) => {
                    if(idx===4){
                        return
                    }
                    else{
                        fetchMoviesInfo(movie?.imbd_id)
                    }
                })
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        fectchMovies();

    }, [movieGenres]);
    console.log(movies);
    
    return(
        <div>
               Top choice Recommendation
               
        </div>
    );
}
export default Recommend;