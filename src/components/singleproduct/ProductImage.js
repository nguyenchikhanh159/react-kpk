import React from 'react';

function ProductImage() {
  return (
    <div class="product_image_area">
    <div class="container">
        <div class="row s_product_inner">
            <div class="col-lg-6">
                <div class="s_Product_carousel">
                    <div class="single-prd-item">
                        <img class="img-fluid" src="img/De_moc_dt/De_moc_dt/3.1.jpg" alt=""/>
                    </div>
                    <div class="single-prd-item">
                        <img class="img-fluid" src="img/De_moc_dt/De_moc_dt/3.2.jpg" alt=""/>
                    </div>
                    <div class="single-prd-item">
                        <img class="img-fluid"src="img/De_moc_dt/De_moc_dt/3.3.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 offset-lg-1">
                <div class="s_product_text">
                    <h3>Giá đỡ điện thoại</h3>
                    <h2>75.000</h2>
                    <ul class="list">
                        <li><a class="active" href="#"><span>Category</span></a></li>
                        <li><a href="#"><span>Có sẵn</span></a></li>
                    </ul>
                    <p>Giá đỡ điện thọai nhỏ gọn thích hợp.</p>
                    <div class="product_count">
                        <label for="qty">Quantity:</label>
                        <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty"/>
                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                         class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                         class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                    </div>
                    <div class="card_area d-flex align-items-center">
                        <a class="primary-btn" href="#">Thêm vào giỏ hàng</a>
                        <a class="icon_btn" href="#"><i class="lnr lnr lnr-diamond"></i></a>
                        <a class="icon_btn" href="#"><i class="lnr lnr lnr-heart"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default ProductImage;
