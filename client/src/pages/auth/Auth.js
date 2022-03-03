import './auth.css'
import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation} from 'react-router-dom'

import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";

const Auth = () => {
    const location = useLocation();
    console.log(location);

    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <div>
            <Container
                className={'d-flex justify-content-center align-items-center boxAuth'}
                style={{height: window.innerHeight - 54}}
            >
                <Card className={'cardAuth'}>
                    <h2 className={'authTitle'}>{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
                    <Form className={'authForm'}>
                        <input
                            type={"email"}
                            placeholder={'email'}
                            className={'input_a'}
                        />
                        <input
                            type={"password"}
                            placeholder={'пароль'}
                            className={'input_a'}
                        />
                        <div className={'authButton'}>
                            {isLogin ?
                            <div>
                                Немає акаунта? <NavLink to={REGISTRATION_ROUTE}>Зареєструватись</NavLink>
                            </div>
                                :
                                <div>
                                    Є акаунт? <NavLink to={LOGIN_ROUTE}>Увійти</NavLink>
                                </div>
                                    }
                            <Button  variant={'outline-success'}>
                                {isLogin ? 'Увійти' : 'Реєстрація'}
                            </Button>
                        </div>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Auth;
