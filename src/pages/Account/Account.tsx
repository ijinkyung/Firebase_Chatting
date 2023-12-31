import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AccountForm from './AccountForm';

export default function Account() {
  const [isSignUp, setIsSignUp] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/signUp') {
      setIsSignUp(true);
    }
  }, [location]);

  return (
    <div className="w-[360px] mx-auto">
      <h1 className="text-4xl text-center font-bold mt-16">
        {isSignUp ? '회원가입' : '로그인'}
      </h1>
      <AccountForm isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
    </div>
  );
}
