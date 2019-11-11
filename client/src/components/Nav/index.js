import React from "react";

function Nav() {
    return (
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" href="/home">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/categories">Categories</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/saved">Saved</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/donate">Donate</a>
            </li>
        </ul>
    )
}

export default Nav;