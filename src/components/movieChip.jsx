import Styles from"../components/movies.module.css";
function MovieChip({movie, selected, setSelected}){
    const handleSelection=()=>{
        if(selected.includes(movie)){
            setSelected(selected.filter(item => item !== movie))
        }else{
            setSelected([...selected, movie])
        }
    }
    
    return(
         <div>
            <div  onClick={handleSelection} className={Styles.movies_chip}>

                <p>{movie}x</p>
               
   
            </div>
            {selected.length<3 ? <p style={{
                color:"red",
            }}>Minimum 3 movies required</p> : null}
         </div>
    );
}
export default MovieChip;