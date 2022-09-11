import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./css/reset.css";
import "./css/fonts.css";
import "./css/style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* ========================================================================================================================
  <2022-09-11>
  - ReactDOM.render는 컴포넌트를 렌더링하는 역할을 하며, react-dom 모듈을 불러와 사용할 수 있다.
    페이지 렌더링할 내용을 JSX 형태로 작성하고 해당 JSX를 렌더링할 때 document.getElementById("root")에 렌더링한다.
  - React.StrictMode는 리액트의 레거시 기능들을 사용하지 못하게 하는 기능이다. 옛날 기능을 사용하였을 때 경고를 출력하게 된다.
* ======================================================================================================================== */
