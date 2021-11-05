import React from 'react'

export default function CheckList() {

  const clearAll = () =>{
    document.querySelectorAll('.checkBox').forEach(element =>{
      element.classList.remove('boxBorder');
    });
    document.querySelectorAll('.check').forEach(element =>{
      element.classList.add('d-none');
    });
  }
    return (
      <div>
        <div class='d-flex flex-column'>
          <h1 class='testing'>CheckList</h1>  
            <label htmlFor="stepOne" class='m-2 step d-inline-flex align-items-center'>
              <input class='d-none' type="checkbox" id='stepOne' name='steps'/>
              <div class='position-relative boxContainer' onClick={()=>{document.getElementById('firstCheck').classList.toggle('d-none'); document.getElementById('firstBox').classList.toggle('boxBorder')}}>
                <div id='firstBox'class='checkBox'></div>
                <div id='firstCheck' class='check d-flex justify-content-center position-absolute bottom-0 d-none'>
                  <i class="fas fa-check "></i>
                </div>
              </div>
              Preheat skillet over medium heat.
            </label>
          
          <label htmlFor="stepTwo" class='m-2 step d-inline-flex align-items-center'>
              <input class='d-none' type="checkbox" id='stepTwo' name='steps'/>
              <div class='position-relative boxContainer' onClick={()=>{document.getElementById('secondCheck').classList.toggle('d-none'); document.getElementById('secondBox').classList.toggle('boxBorder')}}>
                <div id='secondBox'class='checkBox'></div>
                <div id='secondCheck' class='check d-flex justify-content-center position-absolute bottom-0 d-none'>
                  <i class="fas fa-check "></i>
                </div>
              </div>
              Generously butter one side of a slice of bread.
            </label>
            <label htmlFor="stepThree" class='m-2 step d-inline-flex align-items-center'>
              <input class='d-none' type="checkbox" id='stepThree' name='steps'/>
              <div class='position-relative boxContainer' onClick={()=>{document.getElementById('thirdCheck').classList.toggle('d-none'); document.getElementById('thirdBox').classList.toggle('boxBorder')}}>
                <div id='thirdBox'class='checkBox'></div>
                <div id='thirdCheck' class='check d-flex justify-content-center position-absolute bottom-0 d-none'>
                  <i class="fas fa-check "></i>
                </div>
              </div>
              Place bread butter-side-down onto skillet and add 1 slice of cheese.
            </label>
            <label htmlFor="stepFour" class='m-2 step d-inline-flex align-items-center'>
              <input class='d-none' type="checkbox" id='stepFour' name='steps'/>
              <div class='position-relative boxContainer' onClick={()=>{document.getElementById('fourthCheck').classList.toggle('d-none'); document.getElementById('fourthBox').classList.toggle('boxBorder')}}>
                <div id='fourthBox'class='checkBox'></div>
                <div id='fourthCheck' class='check d-flex justify-content-center position-absolute bottom-0 d-none'>
                  <i class="fas fa-check "></i>
                </div>
              </div>
              Butter a second slice of bread on one side and place butter-side-up on top of sandwich.
            </label>
            <label htmlFor="stepFive" class='m-2 step d-inline-flex align-items-center'>
              <input class='d-none' type="checkbox" id='stepFive' name='steps'/>
              <div class='position-relative boxContainer' onClick={()=>{document.getElementById('fifthCheck').classList.toggle('d-none'); document.getElementById('fifthBox').classList.toggle('boxBorder')}}>
                <div id='fifthBox'class='checkBox'></div>
                <div id='fifthCheck' class='check d-flex justify-content-center position-absolute bottom-0 d-none'>
                  <i class="fas fa-check "></i>
                </div>
              </div>
              Grill until lightly browned and flip over.
            </label>
            <label htmlFor="stepSix" class='m-2 step d-inline-flex align-items-center'>
              <input class='d-none' type="checkbox" id='stepSix' name='steps'/>
              <div class='position-relative boxContainer' onClick={()=>{document.getElementById('sixthCheck').classList.toggle('d-none'); document.getElementById('sixthBox').classList.toggle('boxBorder')}}>
                <div id='sixthBox'class='checkBox'></div>
                <div id='sixthCheck' class='check d-flex justify-content-center position-absolute bottom-0 d-none'>
                  <i class="fas fa-check "></i>
                </div>
              </div>
              Continue grilling until cheese is melted.
            </label>
        </div>
        <button class='clearAll' onClick={clearAll}>Clear All</button>
      </div>
    )
}
