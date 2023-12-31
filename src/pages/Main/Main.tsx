import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className="w-full">
      <div className="m-auto text-center text-lg">
        <div className="w-56 h-26 mx-auto mt-44 mb-10">
          <img src="/images/logo.png" alt="logo" className="w-full h-full" />
        </div>
        <Link to="/login">
          <button className="btn btn-wide bg-black mb-2 text-lg font-semibold">
            로그인
          </button>
        </Link>
        <Link to="signUp">
          <button className="btn btn-wide text-lg font-semibold">
            회원가입
          </button>
        </Link>
      </div>
    </div>
  );
}
