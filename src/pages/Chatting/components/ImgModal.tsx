type showProps = {
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  setImageUpload: React.Dispatch<React.SetStateAction<FileList | null>>;
  imgUpload: () => void;
};

export default function ImgModal({
  setModalShow,
  setImageUpload,
  imgUpload,
}: showProps) {
  const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUpload(e.target.files);
  };

  return (
    <div className="card w-96 bg-neutral text-neutral-content absolute top-[30%] left-14 xl:top-[35%] ">
      <div className="card-body items-center text-center">
        <h2 className="card-title">이미지를 선택해주세요!</h2>

        <input
          id="fild"
          type="file"
          onChange={submitHandler}
          className="h-[35px] border-2 border-white border-solid my-3"
        />

        <div className="card-actions justify-end">
          <button
            onClick={() => {
              imgUpload();
            }}
            className="btn "
          >
            Send
          </button>
          <button onClick={() => setModalShow(false)} className="btn btn-ghost">
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
}
