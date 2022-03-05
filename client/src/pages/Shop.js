
import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoryBar from "../components/category_bar/category_bar";
import BrandBar from "../components/brand_bar/brand_bar";

const Shop = () => {
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <CategoryBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;
