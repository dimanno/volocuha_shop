import './brand_bar.css';
import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {product} = useContext(Context);
    return (
        <div className={'brand_row'}>
            {product.brand.map(brand =>
              <Card
                  className={'brand_card'}
                  key={brand.id}
                  onClick={() => product.setSelectedBrand(brand)}
                  border={brand.id === product.selectedBrand.id ? 'danger' : 'light'}
              >
                  {brand.name}
              </Card>
            )}
        </div>
    );
});

export default BrandBar;
