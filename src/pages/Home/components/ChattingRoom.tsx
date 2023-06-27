import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { roomNum, roomTitleStr } from '../../../recoil/chatRoomState';

type ChattingRoomProps = {
  title: string;
  idx: number;
};

export default function ChattingRoom({ title, idx }: ChattingRoomProps) {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useRecoilState(roomNum);
  const setRoomTitle = useSetRecoilState(roomTitleStr);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.value;
    setRoomId(id);
    setRoomTitle(title);
    navigate(`/chatting/${id}`);
  };

  return (
    <div>
      <div className="card h-[150px] w-full bg-base-100 shadow-xl mb-3">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-end">
            <div className="w-[410px] ">
              <button onClick={clickHandler} value={idx} className="btn w-full">
                참여하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
