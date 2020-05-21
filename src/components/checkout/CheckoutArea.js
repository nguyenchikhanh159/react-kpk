import React from 'react';

const marginStyle = {
  fontSize: '15px',
  textAlign: 'center',
  marginRight: "500px",
  marginTop: "20px",
  fontSize: "18px",
  fontFamily: "Roboto, Helvetica, Aria, sans-serif",
  color: "#5F5F5F",
  position: "static"
};
const formBoder = {
  border: "1px solid #cccccc",
  padding: "20px 20px 20px 20px",
  margin: "10px 0px 10px 0px",
  borderRadius: "3px 3px"
}
const laBel = {
  marginTop: "20px",

}
function CheckoutArea() {
  return (

    <section class="checkout_area section_gap">
      <div class="container">

        <div class="billing_details">
          <div class="row">
            <div class="col-lg-8">
              <h3 style={
                marginStyle
              }>Chi tiết đơn hàng</h3>
              <div class="checkout">
                <h3 style={marginStyle}>1. Chon hinh thuc giao hang</h3>
                <form style={formBoder} class="row contact_form" action="#" method="post" novalidate="novalidate">
                  <div class="col-md-6 form-group p_star">
                    <input style={laBel} type="radio" class="form-controls" id="first" name="name" />

                    <label style={laBel} for="male">Giao hang tieu chuan</label>
                  </div>

                </form>

              </div>
              <div class="checkout">
                <h3 style={marginStyle}>2. Thanh toan bang Xu</h3>
                <form style={formBoder} class="row contact_form" action="#" method="post" novalidate="novalidate">
                  <div class="col-md-6 form-group p_star">
                    <input type="radio" class="form-controls" id="first" name="name" />

                    <label for="male">Giao hang tieu chuan</label>
                  </div>

                </form>

              </div>
              <div class="abc">
                <h3 style={marginStyle}>3. Chon hinh thuc giao hang</h3>
                <form style={formBoder} class="row contact_form" action="#" method="post" novalidate="novalidate">
                  <div class="col-md-6 form-group p_star">
                    <input type="radio" class="form-controls" id="first" name="name" />

                    <label for="male">Giao hang tieu chuan</label>
                    <br />
                    <input type="radio" class="form-controls" id="first" name="name" />


                    <label for="male">Giao hang tieu chuan</label>
                    <br />
                    <input type="radio" class="form-controls" id="first" name="name" />

                    <label for="male">Giao hang tieu chuan</label>
                  </div>

                </form>
                <a class="primary-btn" href="#">Đặt hàng</a>

              </div>
            </div>
            <div class="col-lg-4">
              <div class="order_box">
                <button style={{ margin: "0px 10px 10px 240px" }} type="button" class="btn btn-light">Sửa</button>
                <h2>Địa chỉ giao hàng</h2>

                <div>
                  <div class="information">

                    <h6>Nguyễn Chí KHanh</h6>

                    <p class="end">Buu Dien Phước Hải, Thị trấn Phước Hải, Huyện Đất Đỏ, Bà Rịa - Vũng Tàu<br />Việt Nam<br />Điện thoại: 0981154796</p>
                  </div>
                </div>
                <div class="payment_item active">
                  <p class="title">
                    <strong>1 x</strong><a
                      href="https://tiki.vn/gia-treo-tivi-da-nang-goc-2-tay-nhap-khau-nbp4-dung-cho-tivi-32-55-inch-p3345493.html?spid=11484659"
                      target="_blank">Giá treo tivi đa năng góc 2 tay nhập khẩu NBP4 dùng cho tivi 32-55 inch</a>
                    <span class="seller-by">
                      Cung cấp bởi <strong class="firm">Công TyThiết Bị Hải Nam</strong>
                    </span>
                  </p>


                  <p class="price text-right">
                    <span>299.000đ </span>
                  </p>
                  <p class="list-info-price">
                    <b>Tạm tính</b>
                    <span>299.000đ</span>
                  </p>
                  <p class="list-info-price">
                    <b>Phí vận chuyển</b>
                    <span>0đ</span>
                  </p>

                  <p class="total2">
                    Thành tiền:
                <span>299.000đ </span>
                  </p>
                  <p class="text-right">
                    <i>(Đã bao gồm VAT nếu có)</i>
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default CheckoutArea;
