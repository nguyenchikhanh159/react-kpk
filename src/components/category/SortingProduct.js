import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function SortingProduct() {
    return (

        <div class="filter-bar d-flex flex-wrap align-items-center">
            <div class="sorting">
                <select>
                    <option value="1">Default sorting</option>
                    <option value="1">Default sorting</option>
                    <option value="1">Default sorting</option>
                </select>
            </div>
            <div class="sorting mr-auto">
                <select>
                    <option value="1">Show 12</option>
                    <option value="1">Show 12</option>
                    <option value="1">Show 12</option>
                </select>
            </div>
            <div class="pagination">
                <Link class="prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></Link>
                <Link class="active">1</Link>
                <Link>2</Link>
                <Link>3</Link>
                <Link class="dot-dot"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></Link>
                <Link>6</Link>
                <Link class="next-arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
            </div>
        </div>

    );
}

export default SortingProduct;
