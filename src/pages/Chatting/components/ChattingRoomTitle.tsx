import { BiLeftArrow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export default function ChattingRoomTitle() {
  const navigate = useNavigate();

  return (
    <>
      <div className="font-semibold text-2xl py-5 text-center w-full relative">
        채팅방이름
      </div>

      <div className="absolute top-[100px] pl-3 cursor-pointer">
        <BiLeftArrow onClick={() => navigate(-1)} className="w-6 h-6" />
      </div>
    </>
  );
}
