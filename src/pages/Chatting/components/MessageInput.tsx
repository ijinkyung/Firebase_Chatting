import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUser } from '../../../recoil/userState';
import { AiFillPlusCircle } from 'react-icons/ai';
import { db } from '../../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { docsNum, modalState } from '../../../recoil/chatRoomState';
import ImgModal from './ImgModal';
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function MessageInput() {
  const [input, setInput] = useState('');
  const [imageUpload, setImageUpload] = useState<FileList | null>(null);
  const [modalShow, setModalShow] = useRecoilState(modalState);
  const docsId = useRecoilValue(docsNum);
  const [userEmail] = useRecoilState(currentUser);

  const docRef = doc(db, 'messages', docsId);
  const storage = getStorage();

  const updatedData = {
    user: userEmail,
    chat: input,
    image: '',
    updatedAt: new Date(),
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const imgUpload = () => {
    if (imageUpload === null) return;

    const file = imageUpload && imageUpload[0];

    const imageRef = ref(
      storage,
      `images/${imageUpload && imageUpload[0]?.name}`
    );

    uploadBytes(imageRef, file).then(snapshot => {
      getDownloadURL(snapshot.ref).then(url => {
        const newData = {
          ...updatedData,
          chat: '',
          image: url,
        };
        updateDoc(docRef, newData);
      });
    });

    setModalShow(false);
  };

  const sendHandler = () => {
    if (input.length === 0) return;

    updateDoc(docRef, updatedData);

    setInput('');
  };

  return (
    <div className="flex p-3  w-full">
      <div
        onClick={() => {
          setModalShow(true);
        }}
        className="pt-1 pl-1 mr-4 "
      >
        <AiFillPlusCircle className="w-10 h-10 bg-black " />
      </div>
      {modalShow ? (
        <ImgModal
          imgUpload={imgUpload}
          setImageUpload={setImageUpload}
          setModalShow={setModalShow}
        />
      ) : (
        ''
      )}
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
