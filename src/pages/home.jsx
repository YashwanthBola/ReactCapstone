import SignUp from "../components/signUp";
import Styles from"../components/movies.module.css";
import img from '../images/img.png'
function Home(){
    return(
        <div style={{
            display:"flex"
        }}>
              <div style={{
                height:"100vh",
                width:"50vw",
                //background:"cyan",
              }}><img src={img} alt="image" style={{
                height:"100vh",
                width:"50vw",
              }}/></div>
              <div style={{
                background:"black",
                height:"100vh",
                width:"50vw"
              }}><SignUp /></div>
        </div>
    );
}
export default Home;