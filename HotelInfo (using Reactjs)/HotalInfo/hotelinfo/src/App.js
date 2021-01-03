import React from 'react';
import Main from './components/MainComponents';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store =ConfigureStore();
//functional Components

function App(){
   return (
    <Provider store={store}>
    <BrowserRouter>
       <div classNa  me = "App">
         <Main />
      </div>
    </BrowserRouter>
    </Provider>
  );
}
export default App;
