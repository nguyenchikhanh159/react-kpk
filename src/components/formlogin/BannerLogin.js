import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function BannerLogin() {
	return (

		<section class="banner-area organic-breadcrumb">
		<div class="container">
			<div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
				<div class="col-first">
					<h1>Login/Register</h1>
					<nav class="d-flex align-items-center">
						<Link >Home<span class="lnr lnr-arrow-right"></span></Link>
						<Link >Login/Register</Link>
					</nav>
				</div>
			</div>
		</div>
	</section>

	);
}

export default BannerLogin;
