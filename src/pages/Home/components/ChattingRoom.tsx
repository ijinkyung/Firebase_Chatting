export default function ChattingRoom() {
  return (
    <div>
      {CHATTINGROOMS.map(room => {
        const { id, title, sub } = room;
        return (
          <div key={id} className="card w-full bg-base-100 shadow-xl mb-3">
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{sub}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-DarkBlue">참여하기</button>
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
    title: '강서구 강아지 산책 방',
    sub: '강서구 강아지 산책 코스나 정보 공유해요 🐶',
  },
  {
    id: 2,
    title: '강서구 자취 정보 공유 방',
    sub: '강서구 자취러분들 맛집이나 자취 꿀정보 공유해요',
  },
  {
    id: 3,
    title: '강서구 카페 사장님',
    sub: '강서구에서 카페하시는 사장님들 모임',
  },
];
