import { BiLeftArrow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { roomTitleStr } from '../../../recoil/chatRoomState';

export default function ChattingRoomTitle() {
  const navigate = useNavigate();
  const roomTitle = useRecoilValue(roomTitleStr);

  return (
    <>
      <div className="font-semibold text-2xl py-5 text-center w-full relative">
        {roomTitle}
      </div>

      <div className="absolute top-[100px] pl-3 cursor-pointer">
        <BiLeftArrow onClick={() => navigate(-1)} className="w-6 h-6" />
      </div>
    </>
  );
}
