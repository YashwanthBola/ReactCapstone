import Styles from"../components/movies.module.css";
import MovieGrid from "../components/MovieGrid";
import { useState } from "react";
import MovieChip from "../components/movieChip";
import { useNavigate } from "react-router-dom";
const MoviesList=[{
    value:"action",
    label:"Action",
    image:"",
},{
    value:"romace",
    label:"Romance",
    image:"",
},{
    value:"drama",
    label:"Drama",
    image:"",
},{
    value:"thriller",
    label:"Thriller",
    image:"",
},{
    value:"western",
    label:"Western",
    image:"",
},{
    value:"horror",
    label:"Horror",
    image:"",
},{
    value:"fantasy",
    label:"Fantasy",
    image:"",
},{
    value:"music",
    label:"Music",
    image:"",
},{
    value:"fiction",
    label:"Fiction",
    image:"",
}]
function Movies(){
    const [selected, setSelected]=useState([]);
    const navigate=useNavigate();
    const handleNext=()=>{
        if(selected.length < 3){
            alert("Minimum 3 category should be required")
        }
        else{
               localStorage.setItem("selected", JSON.stringify(selected));
               navigate("/widgets");
        }
    }
    return(
        <div style={{
            display:"flex",
        }}>
            <div style={{
                display:"flex",
                flexDirection:"column",
                width:"50vw",
                height:"100vh",
                background:"black",
                color: "white",
            }}> 
                  <div style={{
                    height:"100vh",
                    width:"50vw",

                  }}><h1 style={{
                    alignContent:"center",
                    justifyContent:"center"
                  }}>SUPER APP</h1>
                        <h2>Choose your entertainment category</h2>
                  </div>
                  <div style={{
                    height:"100vh",
                    width:"50vw",
                  }}>
                        
                    {selected.map(movie =>(
                        <MovieChip key={movie} selected={selected} setSelected={setSelected} movie={movie} />
                    ))}
                  </div>
            </div>
            <div style={{
                height:"100vh",
                width:"50vw",
                background:"brown",
            }}>
             <h1>Movies</h1>
             <div className={Styles.movies_grid}>{MoviesList.map(movie =>(
                <MovieGrid key={movie.value} selected={selected} setSelected={setSelected} movie={movie}/>
             ))}</div>
            </div>
            
            <div>
                 <button onClick={handleNext} className="next">Next Page</button>
            </div>
        
        </div>
        
    );
}
export default Movies;
