import ChattingRoomTitle from './components/ChattingRoomTitle';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';

export default function Chatting() {
  return (
    <div className="absolute top-24 w-[360px]">
      <ChattingRoomTitle />
      <MessageList />
      <MessageInput />
    </div>
  );
}
