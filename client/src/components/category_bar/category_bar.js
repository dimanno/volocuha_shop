import './category_bar.css'
import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";
import {Context} from "../../index";

const CategoryBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <ListGroup>
            {product.category.map(category =>
                <ListGroup.Item
                    className={'category-item'}
                    active={category.id === product.selectedCategory.id}
                    onClick={() => product.setSelectedCategory(category)}
                    key={category.id}
                >
                    {category.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default CategoryBar;
