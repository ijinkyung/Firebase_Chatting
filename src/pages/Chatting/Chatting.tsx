import ChattingRoomTitle from './components/ChattingRoomTitle';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';

export default function Chatting() {
  return (
    <div className="rounded-lg relative">
      <ChattingRoomTitle />
      <MessageList />
      <MessageInput />
    </div>
  );
}
