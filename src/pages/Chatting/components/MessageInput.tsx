import { useState } from 'react';
import { set, ref } from 'firebase/database';
import { database } from '../../../firebase';
import { useRecoilState } from 'recoil';
import { currentUser } from '../../../recoil/userState';
import { AiFillPlusCircle } from 'react-icons/ai';
import { data } from 'autoprefixer';

export default function MessageInput() {
  const [input, setInput] = useState('');
  const [userEmail] = useRecoilState(currentUser);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const sendHandler = (e: any) => {
    e.preventDefault();
    setInput('');

    // set(ref(database), {
    //   username: userEmail,
    //   message: input,
    // });

    // database.collection('messages');
    // const chatRef = firestore.collection('messages');
  };

  return (
    <div className="flex p-3  w-full">
      <div className="pt-1 pl-1 mr-4 ">
        <AiFillPlusCircle className="w-10 h-10 bg-black " />
      </div>
      <div className=" flex w-full">
        <input
          type="text"
          placeholder="내용을 입력하세요"
          className="input input-bordered w-full  mr-2"
          onChange={changeHandler}
          value={input}
        />
        <button
          onClick={sendHandler}
          className="btn bg-black hover:bg-black border-none text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
