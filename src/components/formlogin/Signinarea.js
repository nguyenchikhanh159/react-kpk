import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

function SigninArea() {
    return (

        <section class="login_box_area section_gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="login_box_img">
                            <img class="img-fluid" src="img/login.jpg" alt="" />
                            <div class="hover">
                                <h4>New to our website?</h4>
                                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                <a class="primary-btn" href="registration.html">Create an Account</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="login_form_inner">
                            <h3>Log in to enter</h3>
                            <form class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                <div class="col-md-12 form-group">
                                <Link  class="social"><i class="fab fa-facebook-f"></i></Link>
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'" />
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="email" class="form-control" id="emails" name="emails" placeholder="emails" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" />
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" />
                                </div>

                                <div class="col-md-12 form-group">
                                    <button type="submit" value="submit" class="primary-btn">Sign In</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SigninArea;
