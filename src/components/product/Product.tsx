import React, {FC} from 'react';
import {IProductModel} from "../../models/IProductModel";
import './Product.css'

const Product: FC<IProductModel> = (props) => {
    let {
        id,
        title,
        description,
        category,
        price,
        discountPercentage,
        rating,
        stock,
        tags,
        brand,
        sku,
        weight,
        dimensions,
        warrantyInformation,
        shippingInformation,
        availabilityStatus,
        reviews,
        returnPolicy,
        minimumOrderQuantity,
        meta,
        images
    } = props;

    return (
        <div className={'box'}>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <img src={images[0]} alt={title}/>
            <p>Description: {description}</p>
            <p>Category: {category}</p>
            <p><b>Price: {price}</b></p>
            <p><b>Discount percentage: {discountPercentage}</b></p>
            <p>Rating: {rating}</p>
            <p>Stock: {stock}</p>
            <p>Tags:</p>
            <ul>
                <li>{tags[0]}</li>
                <li>{tags[1]}</li>
            </ul>
            <p>Brand: {brand}</p>
            <p>Sku: {sku}</p>
            <p>Weight: {weight}</p>
            <p>Dimensions:</p>
            <ul>
                <li> Width: {dimensions.width}</li>
                <li>Height: {dimensions.height}</li>
                <li>Depth: {dimensions.depth}</li>
            </ul>
            <p>Warranty information: {warrantyInformation}</p>
            <p>Shipping information: {shippingInformation}</p>
            <p>Availability status: {availabilityStatus}</p>
            <p>Reviews:</p>
            <ul>
                <li>Rating: {reviews[0].rating}</li>
                <li>Comment: {reviews[0].comment}</li>
                <li>Date: {reviews[0].date}</li>
                <li>Reviewer name: {reviews[0].reviewerName}</li>
                <li>Reviewer email: {reviews[0].reviewerEmail}</li>
            </ul>
            <ul>
                <li>Rating: {reviews[1].rating}</li>
                <li>Comment: {reviews[1].comment}</li>
                <li>Date: {reviews[1].date}</li>
                <li>Reviewer name: {reviews[1].reviewerName}</li>
                <li>Reviewer email: {reviews[1].reviewerEmail}</li>
            </ul>
            <ul>
                <li>Rating: {reviews[2].rating}</li>
                <li>Comment: {reviews[2].comment}</li>
                <li>Date: {reviews[2].date}</li>
                <li>Reviewer name: {reviews[2].reviewerName}</li>
                <li>Reviewer email: {reviews[2].reviewerEmail}</li>
            </ul>
            <p>ReturnPolicy: {returnPolicy}</p>
            <p>Minimum order quantity: {minimumOrderQuantity}</p>
            <p>Meta:</p>
            <ul>
                <li>Created at: {meta.createdAt}</li>
                <li>Updated at: {meta.updatedAt}</li>
                <li>Barcode: {meta.barcode}</li>
                <li>Qr code: {meta.qrCode}</li>
            </ul>
        </div>
    );
};

export default Product;