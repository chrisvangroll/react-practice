import React, {useState} from 'react';
import imageOne from '../images/01a_pan_off.png';
import imageTwo from '../images/01b_pan_on.png';
import imageThree from '../images/02_butter_bread.png';
import imageFour from '../images/03a_bread_in_pan.png';
import imageFive from '../images/03b_cheese_on_bread.png';
import imageSix from '../images/04_buttered_bread_on_top.png';
import imageSeven from '../images/05_flip.png';
import imageEight from '../images/06_melted_cheese.png';



export default function Slides() {

    const imageArr = [imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight]

    const [img, setImg] = useState(0);
  
    const nextImg = ()=>{
        setImg(img+1);
        document.getElementById('backBtn').classList.remove('d-none');
        if(img == 6){
            document.getElementById('forwardBtn').classList.add('d-none')
        }
    }
 
    const previousImg = ()=>{
        setImg(img-1);
        document.getElementById('forwardBtn').classList.remove('d-none');
        console.log(img)
        if(img == 1){
            document.getElementById('backBtn').classList.add('d-none')
        }
    }

    return (
        <div>
            <img class='img' src={imageArr[img]} alt="image" />
            <button id='forwardBtn' onClick = {nextImg}>Forward</button>
            <button id='backBtn' class='d-none' onClick = {previousImg}>Back</button>
            {/* <button onClick = {previousImg}>forward</button> */}
        </div>
    )
}
