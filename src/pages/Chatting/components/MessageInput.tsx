export default function MessageInput() {
  return (
    <div className="flex p-3 border-t border-solid border-LightBlue w-full xl:w-[360px] xl:bottom-32">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs mr-2"
      />
      <button className="btn bg-LightBlue hover:bg-DarkBlue border-none text-white">
        Send
      </button>
    </div>
  );
}
