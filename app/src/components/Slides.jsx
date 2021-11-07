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
    const stepArr =[
        'Lets get started!',
        'Preheat skillet over medium heat.',
        'Generously butter one side of a slice of bread.',
        'Place bread butter-side-down onto skillet and add 1 slice of cheese.',
        'Butter a second slice of bread on one side and place butter-side-up on top of sandwich.',
        'Grill until lightly browned and flip over.',
        'Continue grilling until cheese is melted.',
        'Enjoy your meal!'   
    ]
    const [img, setImg] = useState(0);
    const [step, setStep] = useState(0);
  
    const nextImg = ()=>{
        setImg(img+1);
        setStep(img+1);
        document.getElementById('backBtn').classList.remove('d-none');
        if(img == 6){
            document.getElementById('forwardBtn').classList.add('d-none')
        }
    }
 
    const previousImg = ()=>{
        setImg(img-1);
        setStep(img-1);
        document.getElementById('forwardBtn').classList.remove('d-none');
        console.log(img)
        if(img == 1){
            document.getElementById('backBtn').classList.add('d-none')
        }
    }

    return (
        <div>
            <h1 class='text-decoration-underline text-center mt-3'>Slide Show</h1>
            <div class ='d-flex justify-content-center'>
                <div id='backBtn' onClick = {previousImg} class='d-none d-flex align-items-center'>
                    <i class="fs-1 chevron p-2 fas fa-chevron-left" ></i>
                </div>
                <img class='img' src={imageArr[img]} alt="image" />
                <div id='forwardBtn' class='d-flex align-items-center' onClick = {nextImg}>
                    <i class="fs-1 chevron p-2 fas fa-chevron-right" ></i>
                </div>
            </div>
            <div class='d-flex justify-content-center'>
                <div class='text-center w-75'>{stepArr[step]}</div>
            </div>
        </div>
    )
}
