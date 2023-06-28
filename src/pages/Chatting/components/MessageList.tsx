import { db } from '../../../firebase';
import { useEffect, useState } from 'react';
import { currentUser } from '../../../recoil/userState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { doc, onSnapshot } from 'firebase/firestore';
import { docsNum } from '../../../recoil/chatRoomState';

type MessageProps = {
  username: string;
  message: string;
  image: string;
};

export default function MessageList() {
  const [messageList, setMessageList] = useState<MessageProps[]>([]);
  const [currentEmail] = useRecoilState(currentUser);
  const docsId = useRecoilValue(docsNum);
  const documentRef = doc(db, 'messages', docsId);

  useEffect(() => {
    const unsubscribe = onSnapshot(documentRef, snapshot => {
      if (snapshot.exists()) {
        const data: MessageProps = {
          username: snapshot.data().user,
          message: snapshot.data().chat,
          image: snapshot.data().image,
        };

        setMessageList(prevList => [...prevList, data]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="h-[450px] xl:h-[550px] px-2 overflow-scroll">
      {messageList.map((item, idx) => {
        const { username, message, image } = item;

        return (
          <div
            key={idx}
            className={`pl-2 ${
              username === currentEmail
                ? 'chat chat-end'
                : 'chat chat-start block'
            }`}
          >
            <div key={idx}>{username === currentEmail ? '' : username}</div>
            {image ? (
              <div className="w-48 rounded-lg border-2 border-solid border-black">
                <img
                  alt="img"
                  className="w-full h-fit rounded-lg"
                  src={image}
                />
              </div>
            ) : (
              <div className="chat-bubble">{message}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
