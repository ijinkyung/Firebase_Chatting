import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import ChattingRoom from './components/ChattingRoom';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../firebase';
import Swal from 'sweetalert2';
import { roomNum } from '../../recoil/chatRoomState';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const setRoomId = useSetRecoilState(roomNum);
  const [roomInfo, setRoomInfo] = useState<
    { roomTitle: string; docId: string }[]
  >([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, 'messages'));
      const newRoomInfo = querySnapshot.docs.map(doc => ({
        roomTitle: doc.data().roomTitle,
        docId: doc.id,
      }));
      setRoomInfo(newRoomInfo);
    };

    fetchMessages();

    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        localStorage.setItem('token', user.uid);
      } else {
        alert('로그인을 먼저 진행해주세요');
        navigate('/login');
      }
    });
  }, [roomInfo]);

  const submitHandler = (roomValue: string) => {
    try {
      addDoc(collection(db, 'messages'), {
        roomTitle: roomValue,
      }).then(docRef => {
        const docId = docRef.id;
        setRoomId(docId);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const newChatRoom = () => {
    Swal.fire({
      title: '채팅방 이름을 지정해주세요!',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: '생성하기',
      showLoaderOnConfirm: true,
    }).then(result => {
      if (result.isConfirmed) {
        const roomValue = result.value;
        submitHandler(roomValue);
      }
    });
  };

  return (
    <div className="p-3">
      {roomInfo.map(
        (room: { roomTitle: string; docId: string }, idx: number) => {
          return (
            <ChattingRoom
              key={idx}
              docId={room.docId}
              roomTitle={room.roomTitle}
              idx={idx}
            />
          );
        }
      )}

      <div className="w-full m-auto">
        <button onClick={newChatRoom} className="btn btn-neutral w-full">
          채팅방 생성하기
        </button>
      </div>
    </div>
  );
}
