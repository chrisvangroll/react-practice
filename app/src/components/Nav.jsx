import React from 'react';
import {Link } from 'react-router-dom';
export default function Nav() {
    return (
        <nav>
             <Link class="p-2 fw-bold text-center d-block navLink" to="/">CHECKLIST</Link>
             <Link class="p-2 fw-bold text-center d-block navLink" to="/slides">SLIDE SHOW</Link>
             <Link class="p-2 fw-bold text-center d-block navLink" to="/dragDrop">DRAG AND DROP</Link>
        </nav>
    )
}
