import './brand_bar.css';
import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {product} = useContext(Context);

    return (
        <Row className='brand_row'>
            {product.brands.map(brand =>
                <Card
                    className={'brand_card'}
                    key={brand.id}
                    onClick={() => product.setSelectedBrands(brand)}
                    border={brand.id === product.selectedBrands.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;
