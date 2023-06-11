import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="navbar bg-base-100 shadow-sm xl:w-[360px] xl:m-auto">
      <Link to="/">
        <img src="/images/logo.png" alt="" className="w-20 h-20" />
      </Link>
    </div>
  );
}
