import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function CartArea() {
	return (
        <section class="cart_area">
        <div class="container">
            <div class="cart_inner">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Sản phẩm</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Tổng</th>
                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="media">
                                        <div class="d-flex">
                                            <img style={{height:"70px",width:"70px"}} src="img/De_moc_dt/De_moc_dt/3.1.jpg" alt=""/>
                                     
                                        </div>
                                        <div class="media-body">
                                            <p>Giá đỡ điện thoại</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h5>50.000</h5>
                                </td>
                                <td>
                                    <div class="product_count">
                                        <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:"
                                            class="input-text qty"/>
                                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                            class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                            class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                                    </div>
                                </td>
                                <td>
                                    <h5>50.000</h5>
                                </td>
                            </tr>
                           
                         
                            <tr class="bottom_button">
                                <td>
                                    {/* <a class="gray_btn" href="#"></a> */}
                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>
                                    <div class="cupon_text d-flex align-items-center">
                                        <input type="text" placeholder="Nhập coupon ở đây"/>
                                        <Link class="primary-btn" >Đồng ý</Link>
                                        <Link class="gray_btn">Đóng coupon</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>
                                    <h5>Tạm tính</h5>
                                </td>
                                <td>
                                    <h5>50.0000000</h5>
                                </td>
                            </tr>
                            <tr class="shipping_area">
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>
                                    <h5>Thành tiền</h5>
                                </td>
                                <td>
                                    <h5>50.0000</h5>
                                </td>
                            </tr>
                            <tr class="out_button_area">
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>
                                    <div class="checkout_btn_inner d-flex align-items-center">
                                        <Link class="gray_btn" >Tiếp tục mua sắm</Link>
                                        <Link class="primary-btn" >Tiến hành đặt hàng</Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
		
	);
}

export default CartArea;
