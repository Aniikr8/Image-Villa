import React, { useState }  from "react";
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
export default function ImageCard({photo1}){
    const[modal,setModal] = useState(false);
const[set,setFunction] = useState('');
function onClick(imgsrc){
     setFunction(imgsrc)
    console.log(imgsrc)
setModal(true);
}
    return(

<>
        <div className={modal ? " model open" : "model"}>

<img src={set}/>

<button className="download-button" variant="contained"><a href={photo1}>Download</a></button>

      <CloseIcon className="sv" onClick={() =>setModal(false)} />

     
        </div>
        <div className="image"  onClick={() => onClick(photo1)} >

        <img className = "grid-item"
         
        src= {photo1}/>

       
        </div>
        </>
    )


}