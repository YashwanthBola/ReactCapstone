import { useEffect, useState } from "react";

export default function Note(){
    const [notes, setNotes]=useState('');
    useEffect(() => {
        if(localStorage.getItem('notes')){
           setNotes( localStorage.getItem('notes'));
        }
    },[])
    
    return(
        <div>
            <h2>Note</h2>
            <p>This is a Note Component</p>
            <textarea style={{
                minHeight:"200px",
                maxWidth:"500px",
                minWidth:"500px",
                backgroundColor:"yellow",
                text:"black",
            }} 
                value={notes}
                onChange={(e) => {setNotes(e.target.value); localStorage.setItem("notes", e.target.value)}}></textarea>
        </div>
    );
}