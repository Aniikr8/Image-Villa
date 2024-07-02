import React from 'react';
import './App.css';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CircularProgress from '@mui/material/CircularProgress';
import ImageCard from './ImageCard';
import { useState, useEffect } from "react";
const API_URL = 'https://api.unsplash.com/search/photos/?client_id=g8j1iJlv-8NyTdIJeR49_3RfQdlMQHrXN9eXvdrt3wU&per_page=20';
function App() {

  const[photo,setPhoto] = useState([])
  const[photo1,setPhoto1] = useState([])
const[seeflag,setflag] = useState(true);
  const[page,setPage] = useState(1)
  const[page1,setPage1] = useState(1)
  const[incCoutn, setInccount] = useState(1);
  const[searchPhoto,setSearch] = useState([])

  const[load,setLoad] = useState(true);
  const photoarray = [];
 

// setPhoto(data.results)




  const searchMovies = async(title) =>
    {
    
const response = await fetch(`${API_URL}&query=${title}&page=${page}`)
const data = await response.json();

console.log(data);

console.log("data.results");

setPhoto1(data.total_pages);
  setPhoto ((prev) =>  {
    console.log(page)
    console.log(prev)
    photoarray.push(prev);
console.log(photoarray)
    return[...prev,...data.results]
    
  }
  );


// setPhoto(data.results)
setLoad(false)

    }


    








const handleinfinitescroll = async()=>
{
  try {
    // console.log("scrollheight"+ document.documentElement.scrollHeight)
    // console.log("innerheight"+ window.innerHeight)
    // console.log("scroll top"+ document.documentElement.scrollTop)

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {

      setLoad(true)
      setPage ((prevResult)=> prevResult+1)
    
      // setInccount((prev) => ++prev)
      
      console.log(photo.total_pages)
    }
    else{
      console.log("byy")
    }

  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>
    {
     
console.log(photo1)
console.log(seeflag);
      console.log(incCoutn+1);
console.log("run niga")
if(seeflag){

  console.log("yes daday");
  searchMovies('random');
 
}
else{
  console.log("no dady");
  searchMovies(searchPhoto);
}


    },[page]
    )
//     useEffect(()=>
//     {
// console.log("run")
// searchMovies(searchPhoto);

//     },[page]
//     )
    


   


    useEffect(()=>
    {
      window.addEventListener("scroll",handleinfinitescroll);
      return () => window.removeEventListener("scroll", handleinfinitescroll);
    },[])


function onFilter(value){
console.log(value);
  console.log("Filter Clicked");
  setSearch(value);
  setLoad(true);
  searchMovies(value);
  setPhoto([]);
  setflag(false);
}

    
    return (
      <div  className='Main'>
        <div className='Input'>
        <h1>
          Image Villa
        </h1>
        <input className='search'
        placeholder="Search for Image"
        value = {searchPhoto}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setPhoto([]);
                searchMovies(searchPhoto);
                setPage(1);
                setInccount(photo1)
                setflag(false);
                console.log(searchPhoto)
            }
          }}
        />
        </div>
        <div className='buttonStack'>
        <Button variant="contained"  value="bird" onClick={() => onFilter('Bird')}>Bird</Button>
        <Button variant="contained"  value="bird" onClick={() => onFilter('Animal')}>Animal</Button>
        <Button variant="contained"  value="bird" onClick={() => onFilter('Anime')}>Anime</Button>
        <Button variant="contained"  value="bird" onClick={() => onFilter('Car')}>Car</Button>
          <div className='Menu'>
            < MenuIcon className='menu-icon'/>
          </div>
        </div>
       
      
 <div className="image-all-body">
<ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4, 900: 4 }}>
          <Masonry columnsCount={5} gutter='10px'> 
            
          { (
            photo.map((photo) => (
              <ImageCard
             
                key={photo.id}
                photo1={photo.urls.regular}
              />
            ))
          ) }
        {/* <CircularProgress className='load'/> */}
       
             {load && <CircularProgress className='load'/>}
         
             </Masonry>
           
             </ResponsiveMasonry>
          
        
        </div>
      </div>
    );
          
  }

export default App;
