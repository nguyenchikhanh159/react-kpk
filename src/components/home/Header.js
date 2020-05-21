import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const menus = [
	{
		name: 'Home',
		to: '/',
		exact: true
	},
	{
		name: 'Shop',
		to: '/category',
		exact: false
	},
	{
		name: 'Blog',
		to: '/blog',
		exact: true
	},
	{
		name: 'Pages',
		to: '/pages',
		exact: false
	},
	{
		name: 'Contact',
		to: '/contact',
		exact: false
	}
]
function Header() {
	return (

		<header class="header_area sticky-header">
			<div class="main_menu">
				<nav class="navbar navbar-expand-lg navbar-light main_box">
					<div class="container">

						<Link class="navbar-brand logo_h"><img class="logox" src="img/logo.png" alt="" /></Link>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>

						<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul class="nav navbar-nav menu_nav ml-auto">
								<li class="nav-item active"><Link to="/" class="nav-link" href="index.html">Trang chủ</Link></li>
								<li class="nav-item submenu dropdown">
									<Link class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
										aria-expanded="false">Cửa hàng</Link>
									<ul class="dropdown-menu">
										<li class="nav-item"><Link to="/category" class="nav-link" href="category.html">Sản phẩm</Link></li>
										<li class="nav-item"><Link class="nav-link" href="category.html">Theo dõi đơn hàng</Link></li>
							
									</ul>
								</li>
								<li class="nav-item submenu dropdown">
									<Link to="/blog" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
										aria-expanded="false">Blog</Link>
									<ul class="dropdown-menu">
										<li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
										<li class="nav-item"><a class="nav-link" href="single-blog.html">Blog Details</a></li>
									</ul>
								</li>
								<li class="nav-item submenu dropdown">
									<Link to="/pages" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
										aria-expanded="false">Tài khoản</Link>
									<ul class="dropdown-menu">
										<li class="nav-item"><Link to="/login" class="nav-link" href="login.html">Đăng nhập</Link></li>
										<li class="nav-item"><Link to="/signin" class="nav-link" href="tracking.html">Tạo tài khoản</Link></li>
										<li class="nav-item"><a class="nav-link" href="elements.html">Đăng nhập  Google</a></li>
										<li class="nav-item"><a class="nav-link" href="elements.html">Đăng nhập  Facebook</a></li>
									</ul>
								</li>

								<li class="nav-item"><Link to="/contact" class="nav-link" href="contact.html">Liên lạc</Link></li>


							</ul>
							<ul class="nav navbar-nav navbar-right">
								<li class="nav-item">
									<a style={{color:"#222222"}} class="cart">
									<span class="ti-bag"></span>
									Giỏ hàng
									</a>
									
								</li>
								<li class="nav-item">
									<button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<div class="search_input" id="search_input_box">
				<div class="container">
					<form class="d-flex justify-content-between">
						<input type="text" class="form-control" id="search_input" placeholder="Search Here" />
						<button type="submit" class="btn"></button>
						<span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
					</form>
				</div>
			</div>
		</header>

	);
}

export default Header;
