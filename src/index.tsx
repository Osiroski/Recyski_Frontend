import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './Router/Routes';
import { Provider } from 'react-redux'
import { Store } from "redux";
import store from "./redux/store/store";
import { IApplicationState } from "./redux/store/store";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
//...
let persistor = persistStore(store);
interface IProps {
  store: Store<IApplicationState>;
}

const Root: React.FC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <PersistGate loading={null} persistor={persistor}>
      <Routes />
      </PersistGate>
    </Provider>
  );
};
ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
