import './navBar.css'
import React, {useContext} from 'react';
import {Context} from "../../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {observer} from "mobx-react-lite";

import {SHOP_ROUTE} from "../../utils/consts";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <a className={'navBarBox'} href={SHOP_ROUTE}>Волоцюга SHOP</a>
                    {user._isAuth ?
                        <Nav className={"navLink"}>
                            <Button variant={'outline-light'}>Адмін Панель</Button>
                            <Button variant={'outline-light'} className={'logout'}>Вийти</Button>
                        </Nav>
                        :
                        <Nav className={"navLink"}>
                            <Button variant={'outline-light'} onClick={()=> user.setIsAuth(true)}>Авторизація</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
    );
});

export default NavBar;
