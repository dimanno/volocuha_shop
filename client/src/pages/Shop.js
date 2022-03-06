
import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoryBar from "../components/CategoryBar/CategoryBar";
import BrandBar from "../components/BrandBar/BrandBar";
import ProductList from "../components/ProductList/ProductList";

const Shop = () => {
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <CategoryBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <ProductList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;
