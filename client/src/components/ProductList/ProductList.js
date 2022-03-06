import './product_list.css'
import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = observer(() => {
    const {product} = useContext(Context);

    return (
        <Row className={'wrap_list'}>
            {product.products.map(product =>
                // console.log(product.name)
               <ProductItem key={product.id} product={product}/>
            )}
        </Row>
    );
});

export default ProductList;
