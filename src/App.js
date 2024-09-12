import React, { useState } from 'react';
import MainHeader from './components/SideEffect/MainHeader/MainHeader.js';
import Login from './components/SideEffect/Login/Login.js';

const App = () => {
  // 로그인 상태를 기억하는 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 서버로 로그인을 요청하는 함수 (나중에 비동기 방식으로 실제 요청이 들어갈 것)
  const loginHandler = (email, password) => {
    if (email === 'abc1234' && password === 'aaa1111') {
      // 로그인 성공
    } else {
      // 로그인 실패
      alert('로그인 실패입니다.');
    }
  };
  return (
    <>
      <MainHeader />
      <main>
        <Login />
      </main>
    </>
  );
};

export default App;
