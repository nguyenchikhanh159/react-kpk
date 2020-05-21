import React, { Fragment } from 'react';
import BannerSproduct from './BannerSproduct';
import ProductImage from './ProductImage';
import DecriptionPD from './DecriptionPD';

import Footer from './../home/Footer';
function SingleProduct() {
  return (
        <Fragment>
           
            <BannerSproduct/>
            <ProductImage/>
            <DecriptionPD/>
            <Footer/>
        </Fragment>
  );
}

export default SingleProduct;
