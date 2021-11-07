import React from 'react';
import {Link } from 'react-router-dom';
export default function Nav() {
    return (
        <nav class='p-md-3 d-flex flex-column flex-md-row justify-content-md-center'>
             <Link class="p-2 fw-bold text-center d-block navLink me-md-3" to="/">CHECKLIST</Link>
             <Link class="p-2 fw-bold text-center d-block navLink me-md-3" to="/slides">SLIDE SHOW</Link>
             <Link class="p-2 fw-bold text-center d-block navLink me-md-3" to="/dragDrop">DRAG AND DROP</Link>
        </nav>
    )
}
