import { useNavigate } from 'react-router-dom';

export default function ChattingRoom() {
  const navigate = useNavigate();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.value;
    navigate(`/chatting/${id}`);
  };

  return (
    <div>
      {CHATTINGROOMS.map(room => {
        const { id, title, thum } = room;
        return (
          <div
            key={id}
            className="card h-[250px] w-full bg-base-100 shadow-xl mb-3"
          >
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <div className="h-[100px] overflow-hidden relative">
                <img
                  src={thum}
                  alt="thum"
                  className="w-full h-fit absolute translate-y-[-30%]"
                />
              </div>

              <div className="card-actions justify-end">
                <div className="w-[410px] ">
                  <button
                    onClick={clickHandler}
                    value={id}
                    className="btn w-full"
                  >
                    참여하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const CHATTINGROOMS = [
  {
    id: 1,
    title: '붕어빵 타이쿤 🥐',
    thum: 'https://i.pinimg.com/564x/7f/f0/63/7ff063bd1fdace6c365712a74ed6705f.jpg',
  },
  {
    id: 2,
    title: '유기견 봉사 정보 공유 방 🐾',
    thum: 'https://i.pinimg.com/564x/4d/37/a9/4d37a9a70b8abbf026a487af29aa3d0e.jpg',
  },
  {
    id: 3,
    title: '테니스 같이 쳐요 🎾',
    thum: 'https://i.pinimg.com/564x/8d/1c/5e/8d1c5ec44952a33943a285eeec92a7a1.jpg',
  },
];
