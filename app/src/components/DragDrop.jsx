import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const stepArray = [
  {
    id: '4',
    step: 'Grill until lightly browned and flip over.'
  },
  {
    id: '2',
    step: 'Place bread butter-side-down onto skillet and add 1 slice of cheese.'
  },
  {
    id: '0',
    step: 'Preheat skillet over medium heat.'
  },
  {
    id: '1',
    step: 'Generously butter one side of a slice of bread.'
  },

  {
    id: '5',
    step: 'Continue grilling until cheese is melted'
  },
  {
    id: '3',
    step: 'Butter a second slice of bread on one side and place butter-side-up on top of sandwich.'
  }
]

function DragDrop() {
    
  const [steps, updateSteps] = useState(stepArray);
  const [errors, setErrors] = useState(0);
  const [btnText, setBtnText] = useState('Check Your Answers');
  const [isChecked, setIsChecked] = useState(false)

   
    
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(steps);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateSteps(items);
  }

  function btnToggle (){
      if(isChecked===false){
        const listArray = document.querySelectorAll('li')
        let counter = 0;
        for(let i=0; i<=listArray.length-1; i++){
            if(parseInt(listArray[i].id) !== i){
                listArray[i].classList.add('wrong');
                counter ++;
            }
        }  
        setErrors(counter);
        counter === 0 ? document.getElementById('successMsg').classList.remove('d-none'): document.getElementById('errorMsg').classList.remove('d-none');
        setIsChecked(true);
        setBtnText('Try Again')
    }else{
        document.getElementById('successMsg').classList.add('d-none');
        document.getElementById('errorMsg').classList.add('d-none');
        document.querySelectorAll('li').forEach(li =>{
            li.classList.remove('wrong');
        })
        setIsChecked(false);
        setBtnText('Check Your Answers')
    }
  }
 
  return (
    <main class='dndContainer'>
        <h1 class='text-center'>Order the Steps</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {steps.map(({id, step}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li id={id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            { step }
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <div id='errorMsg' class='d-none errorMsg text-center fs-3'>{`You have ${errors} errors.`}</div>
        <div id='successMsg' class='d-none successMsg text-center fs-3'>Correct!</div>
        <div class='d-flex justify-content-center'>
          <button class='checkBtn mt-2' onClick={btnToggle}>{btnText}</button>
        </div>
        {/* <button class='tryAgain d-none' onClick={tryAgain}>Try Again</button> */}
    </main>
  );
}

export default DragDrop;


