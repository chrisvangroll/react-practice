import React from 'react'

export default function DragDrop() {
    return (
        <main>
            <h1 class='text-center mt-3'>Drag and Drop</h1>
            <div class='stepContainer d-flex flex-row'>
                <div class='number d-flex justify-content-center align-items-center me-1'>
                    <span>1.</span>
                </div>
                <div class='d-flex justify-content-center align-items-center'>
                    <div draggable ='true' className="draggable">
                        Preheat skillet over medium heat.
                    </div>
                </div>
            </div>
            <div class='stepContainer d-flex flex-row'>
                <div class='number d-flex justify-content-center align-items-center me-1'>
                    <span>2.</span>
                </div>
                <div class='d-flex justify-content-center align-items-center'>
                    <div draggable ='true' className="draggable">
                        Generously butter one side of a slice of bread.
                    </div>
                </div>
            </div>
            <div class='stepContainer d-flex flex-row'>
                <div class='number d-flex justify-content-center align-items-center me-1'>
                    <span>3.</span>
                </div>
                <div class='d-flex justify-content-center align-items-center'>
                    <div draggable ='true' className="draggable">
                        Place bread butter-side-down onto skillet and add 1 slice of cheese.
                    </div>
                </div>
            </div>
            <div class='stepContainer d-flex flex-row'>
                <div class='number d-flex justify-content-center align-items-center me-1'>
                    <span>4.</span>
                </div>
                <div class='d-flex justify-content-center align-items-center'>
                    <div draggable ='true' className="draggable">
                        Butter a second slice of bread on one side and place butter-side-up on top of sandwich.
                    </div>
                </div>
            </div>
            <div class='stepContainer d-flex flex-row'>
                <div class='number d-flex justify-content-center align-items-center me-1'>
                    <span>5.</span>
                </div>
                <div class='d-flex justify-content-center align-items-center'>
                    <div draggable ='true' className="draggable">
                         Grill until lightly browned and flip over.
                    </div>
                </div>
            </div>
            <div class='stepContainer d-flex flex-row'>
                <div class='number d-flex justify-content-center align-items-center me-1'>
                    <span>6.</span>
                </div>
                <div class='d-flex justify-content-center align-items-center'>
                    <div draggable ='true' className="draggable">
                        Continue grilling until cheese is melted.
                    </div>
                </div>
            </div>
        </main>
    )
}
