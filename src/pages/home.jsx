import SignUp from "../components/signUp";
import Styles from"../components/movies.module.css";
function Home(){
    return(
        <div style={{
            display:"flex"
        }}>
              <div style={{
                height:"100vh",
                width:"50vw",
                background:"cyan",
              }}><img src="img.png" alt="image"/></div>
              <div style={{
                background:"black",
                height:"100vh",
                width:"50vw"
              }}><SignUp /></div>
        </div>
    );
}
export default Home;