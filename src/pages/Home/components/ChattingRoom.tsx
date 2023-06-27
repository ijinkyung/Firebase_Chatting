import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { docsNum, roomNum, roomTitleStr } from '../../../recoil/chatRoomState';

type ChattingRoomProps = {
  roomTitle: string;
  docId: string;
  idx: number;
};

export default function ChattingRoom({
  roomTitle,
  docId,
  idx,
}: ChattingRoomProps) {
  const navigate = useNavigate();
  const setRoomId = useSetRecoilState(roomNum);
  const setDocsId = useSetRecoilState(docsNum);
  const setRoomTitle = useSetRecoilState(roomTitleStr);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.value;
    setRoomId(id);
    setRoomTitle(roomTitle);
    setDocsId(e.currentTarget.name);
    navigate(`/chatting/${id}`);
  };

  return (
    <div>
      <div className="card h-[150px] w-full bg-base-100 shadow-xl mb-3">
        <div className="card-body">
          <h2 className="card-title">{roomTitle}</h2>

          <div className="card-actions justify-end">
            <div className="w-[410px] ">
              <button
                onClick={clickHandler}
                value={idx}
                name={docId}
                className="btn w-full"
              >
                참여하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
