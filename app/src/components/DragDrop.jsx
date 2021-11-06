import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const stepArray = [
  {
    id: 'fifth',
    name: 'Grill until lightly browned and flip over.'
  },
  {
    id: 'third',
    name: 'Place bread butter-side-down onto skillet and add 1 slice of cheese.'
  },
  {
    id: 'first',
    name: 'Preheat skillet over medium heat.'
  },
  {
    id: 'second',
    name: 'Generously butter one side of a slice of bread.'
  },

  {
    id: 'sixth',
    name: 'Continue grilling until cheese is melted'
  },
  {
    id: 'fourth',
    name: 'Butter a second slice of bread on one side and place butter-side-up on top of sandwich.'
  }
]

function DragDrop() {
  const [steps, updateSteps] = useState(stepArray);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(steps);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateSteps(items);
  }

  return (
    <main>
        <h1>Order the</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {steps.map(({id, name}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            { name }
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
    </main>
  );
}

export default DragDrop;


// import React, {useState} from 'react';
// import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';



// export default function DragDrop() {

// const steps = [
//     {
//         id:1,
//         step:'Preheat skillet over medium heat.'
//     },
//     {
//         id:2,
//         step:'Generously butter one side of a slice of bread.'
//     },
//     {
//         id:3,
//         step:'Place bread butter-side-down onto skillet and add 1 slice of cheese.'
//     },
//     {
//         id:4,
//         step:'Continue grilling until cheese is melted.'
//     },
//     {
//         id:5,
//         step:'Grill until lightly browned and flip over.'
//     },
//     {
//         id:6,
//         step:'Butter a second slice of bread on one side and place butter-side-up on top of sandwich.'
//     }
// ]
//     return (
//         <main>
//             <h1 class='text-center mt-3'>Drag and Drop</h1>
//             <DragDropContext>
//                 <Droppable droppableId='dropId'>
//                     {(provided)=>
//                     <ul {...provided.droppableProps} ref={provided.innerRef}>{steps.map(({id, step}, index)=>{
//                         return (
//                             <Draggable key={id} draggableId={id} index={index}>
//                                 {(provided)=>(
//                                 <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{step}</li>
//                                 )}
//                             </Draggable>
//                         )
//                     })}
//                     </ul>
//                     }
//                 </Droppable>
//             </DragDropContext>
//         </main>
//     )
// }
