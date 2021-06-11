import React from 'react';

export default class nav extends React.Component{

    render(){
        return(

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Insert Vehical</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/vehical">Vehicals</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/category">Category</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/eachcategory">Vehicals in Each Category</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/caltrip">Calculate Trip Price</a>
                </li>
                </ul>
            </div>
            </nav>
           
        )
    }

}