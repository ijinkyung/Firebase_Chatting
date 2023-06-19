import { ref, onValue } from 'firebase/database';
import { database } from '../../../firebase';
import { useEffect, useState } from 'react';
import { currentUser } from '../../../recoil/userState';
import { useRecoilState } from 'recoil';

type MessageProps = {
  username: string;
  message: string;
};

export default function MessageList() {
  const [messageList, setMessageList] = useState<MessageProps[]>([]);
  const [currentEmail] = useRecoilState(currentUser);
  const [isCurrentUser, setIsCurrentUser] = useState(true);

  useEffect(() => {
    const starCountRef = ref(database);
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      setMessageList(prevList => [...prevList, data]);
    });
  }, []);

  return (
    <div className="w-full h-[490px] bg-LightBeige">
      {messageList.map((item, idx) => {
        const { username, message } = item;

        return (
          <div
            key={idx}
            className={`pl-2 ${
              username === currentEmail
                ? 'chat chat-end'
                : 'chat chat-start block'
            }`}
          >
            <div key={idx} className="">
              {username}
            </div>
            <div className="chat-bubble bg-DarkBlue text-black">{message}</div>
          </div>
        );
      })}
    </div>
  );
}
