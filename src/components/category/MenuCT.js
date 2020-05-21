import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function MenuCT() {
    return (
        <div class="col-xl-3 col-lg-4 col-md-5">
            <div class="sidebar-categories">
                <div class="head">Danh mục sản phẩm</div>
                <ul class="main-categories">
                    <li class="main-nav-list"><Link data-toggle="collapse"  aria-expanded="false" aria-controls="fruitsVegetable"><span
                        class="lnr lnr-arrow-right"></span>Đế mốc điện thoại<span class="number">(53)</span></Link>

                    </li>
                    <li class="main-nav-list"><Link data-toggle="collapse"  aria-expanded="false" aria-controls="fruitsVegetable"><span
                        class="lnr lnr-arrow-right"></span>Gậy tự sướng<span class="number">(53)</span></Link>

                    </li>
                    <li class="main-nav-list"><Link data-toggle="collapse"  aria-expanded="false" aria-controls="fruitsVegetable"><span
                        class="lnr lnr-arrow-right"></span>Giá đỡ điện thoại<span class="number">(53)</span></Link>

                    </li>
                    <li class="main-nav-list"><Link data-toggle="collapse"  aria-expanded="false" aria-controls="fruitsVegetable"><span
                        class="lnr lnr-arrow-right"></span>Màn hình<span class="number">(53)</span></Link>
                        	<ul class="collapse" id="fruitsVegetable" data-toggle="collapse" aria-expanded="false" aria-controls="fruitsVegetable">
								<li class="main-nav-list child"><Link >Ốp lưng<span class="number">(13)</span></Link></li>
								<li class="main-nav-list child"><Link >Cường lực<span class="number">(09)</span></Link></li>

							</ul>
                    </li>
                    <li class="main-nav-list"><Link data-toggle="collapse"  aria-expanded="false" aria-controls="fruitsVegetable"><span
                        class="lnr lnr-arrow-right"></span>Pin sạc dự phòng<span class="number">(53)</span></Link>
                        <li class="main-nav-list child"><Link >Xiaomi<span class="number">(13)</span></Link></li>
								<li class="main-nav-list child"><Link >Iphone<span class="number">(09)</span></Link></li>
                    </li>
                    <li class="main-nav-list"><Link data-toggle="collapse"  aria-expanded="false" aria-controls="fruitsVegetable"><span
                        class="lnr lnr-arrow-right"></span>Sạc cáp<span class="number">(53)</span></Link>

                    </li>
                    <li class="main-nav-list"><Link data-toggle="collapse"  aria-expanded="false" aria-controls="fruitsVegetable"><span
                        class="lnr lnr-arrow-right"></span>Tai phone<span class="number">(53)</span></Link>

                    </li>
                    <li class="main-nav-list"><Link data-toggle="collapse"  aria-expanded="false" aria-controls="fruitsVegetable"><span
                        class="lnr lnr-arrow-right"></span>Thẻ nhớ<span class="number">(53)</span></Link>

                    </li>
                    <li class="main-nav-list"><Link data-toggle="collapse"  aria-expanded="false" aria-controls="fruitsVegetable"><span
                        class="lnr lnr-arrow-right"></span>Túi chống nước<span class="number">(53)</span></Link>

                    </li>


                </ul>
            </div>
        </div>
    );
}

export default MenuCT;
