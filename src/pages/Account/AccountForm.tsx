import { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { currentUser } from '../../recoil/userState';

interface isLoginProps {
  isSignUp: boolean;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AccountForm({ isSignUp, setIsSignUp }: isLoginProps) {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const setUser = useSetRecoilState(currentUser);
  const { email, password } = inputValue;
  const navigate = useNavigate();
  let errorText = '';

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nextInput = {
      ...inputValue,
      [name]: value,
    };
    setInputValue(nextInput);
  };

  const isDisabled = () => {
    if (email.includes('@') && password.length >= 8) {
      return false;
    } else return true;
  };

  const register = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        if (user) {
          alert('환영합니다.');
          navigate('/');
        }
      })
      .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const signIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        if (user) {
          setUser(user.email ?? '');
          navigate('/home');
        }
      })
      .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const clickHandler = () => {
    if (isSignUp) {
      navigate('/login');
      setIsSignUp(false);
    } else {
      navigate('/signUp');
      setIsSignUp(true);
    }
  };

  return (
    <form className="text-center mt-12">
      <label className="label pl-5">이메일</label>
      <input
        type="text"
        placeholder="이메일을 입력해주세요"
        className="input input-bordered w-full max-w-xs mb-5 relative"
        name="email"
        onChange={changeHandler}
      />

      <label className="label pl-5">비밀번호</label>
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        className="input input-bordered w-full max-w-xs mb-5"
        autoComplete="off"
        name="password"
        onChange={changeHandler}
      />

      <label className="label-text-alt absolute left-5 top-[395px] text-red-500">
        {errorText}
      </label>
      <div className="text-center">
        <button
          className="btn w-11/12 mt-12 mb-2"
          disabled={isDisabled()}
          onClick={e => {
            e.preventDefault();
            isSignUp ? register() : signIn();
          }}
        >
          {isSignUp ? '회원가입하기' : '로그인하기'}
        </button>

        <p onClick={clickHandler} className="text-sm cursor-pointer">
          {isSignUp ? '로그인하러 가기' : '회원가입하러 가기'}
        </p>
      </div>
    </form>
  );
}
