import React from 'react';
import {productsObj} from "../../data";
import {IProductModel} from "../../models/IProductModel";
import Product from "../product/Product";
import './Products.css'

const Products = () => {
    return (
        <div className={'grid-box'}>
            {
                productsObj.map((product:IProductModel) => <Product id={product.id} title={product.title} description={product.description} category={product.description} price={product.price} discountPercentage={product.discountPercentage} rating={product.rating} stock={product.stock} tags={product.tags} sku={product.sku} weight={product.weight} dimensions={product.dimensions} warrantyInformation={product.warrantyInformation} shippingInformation={product.shippingInformation} availabilityStatus={product.availabilityStatus} reviews={product.reviews} returnPolicy={product.returnPolicy} minimumOrderQuantity={product.minimumOrderQuantity} meta={product.meta} images={product.images} thumbnail={product.thumbnail}/>)
            }
        </div>
    );
};

export default Products;