import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {UserStore} from "./store/UserStore";
import {ProductStore} from './store/ProductStore'

export const Context = createContext(null)
const {Provider} = Context
ReactDOM.render(
     <Provider value={{
         user: new UserStore(),
         product: new ProductStore()
     }}>
         <App />,
     </Provider>,
  document.getElementById('root')
);
