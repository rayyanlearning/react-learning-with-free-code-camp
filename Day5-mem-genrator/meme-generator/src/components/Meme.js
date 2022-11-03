import React from 'react';
import ReactDOM from 'react-dom';
import './../styles/Meme.css';
import btnlog from './../images/navbar/Get a new meme image 🖼 (1).png';
import memes2 from './memeData';
//useState is a part of react library
//you can use it like that React,{useState} from 'react'
//if you want the old value of state just pass callback function to and return accordingly

export default function Meme(){
    let [imgUrl,setImageUrl] = React.useState("https://i.imgflip.com/1bij.jpg");
    console.log(imgUrl);
    function display(){
       console.log(memes2,typeof memes2);
       const RandomNumber = Math.floor(Math.random()*2);
       console.log(memes2.data.memes[RandomNumber].url);
       imgUrl = memes2.data.memes[RandomNumber].url;
       setImageUrl(imgUrl);
    }
    return(

        <div >
            <form>
            <div>
                <div className='meme-input-container'>
                    <div>    
                        <input className='first-input' type="text"></input>
                    </div>
                    <div>         
                       <input className='second-input' type="text"></input>
                    </div>
                    <button className='meme-btn' onClick={display}  type='button'>
                       <span><img className='btn-image' src={btnlog}></img></span> 
                    </button>
                </div>
            </div>
            </form>
            <img className='joke-image' src={imgUrl}></img>
        </div>
    );
}