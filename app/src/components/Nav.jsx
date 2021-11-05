import React from 'react';
import {Link } from 'react-router-dom';
export default function Nav() {
    return (
        <div>
             <Link class="text-center d-block" to="/">Checklist</Link>
             <Link class="text-center d-block" to="/slides">Slide Show</Link>
             <Link class="text-center d-block" to="/dragDrop">Drag and Drop</Link>
        </div>
    )
}
