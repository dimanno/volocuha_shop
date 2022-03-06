import './product_item.css';
import React, {useEffect, useState} from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../../assets/Star.png'
import {useNavigate} from "react-router-dom";
import {PRODUCT_ROUTE} from "../../utils/consts";


const ProductItem = ({product}) => {
    const navigate = useNavigate();

    const onProductPage = () => {
       navigate(`${PRODUCT_ROUTE}/${product.id}`);
    }

    return (
        <Col md={3}
             className={'products_wrap'}
             onClick={onProductPage}
        >
            <Card className={'product_card'}>
                <Image src={product.img}/>
                <div className={'d-flex justify-content-between align-items-center'}>
                    <div className={'text-black-50'}>Terra Incognita</div>
                    <div className={'d-flex'}>
                        <div>{product.rating}</div>
                        <div>
                            <Image width={15} height={15} src={star}/>
                        </div>
                    </div>
                </div>
                <div>{product.name}</div>
            </Card>
        </Col>
    );
};

export default ProductItem;
