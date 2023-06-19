import { useState } from 'react';
import { set, ref } from 'firebase/database';
import { database } from '../../../firebase';
import { useRecoilState } from 'recoil';
import { currentUser } from '../../../recoil/userState';

export default function MessageInput() {
  const [input, setInput] = useState('');
  const [userEmail] = useRecoilState(currentUser);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const sendHandler = (e: any) => {
    e.preventDefault();

    set(ref(database), {
      username: userEmail,
      message: input,
    });
  };

  return (
    <div className="flex p-3 border-t border-solid border-LightBlue w-full xl:w-[360px] xl:bottom-32">
      <input
        type="text"
        placeholder="내용을 입력하세요"
        className="input input-bordered w-full max-w-xs mr-2"
        onChange={changeHandler}
      />
      <button
        onClick={sendHandler}
        className="btn bg-LightBlue hover:bg-DarkBlue border-none text-white"
      >
        Send
      </button>
    </div>
  );
}
