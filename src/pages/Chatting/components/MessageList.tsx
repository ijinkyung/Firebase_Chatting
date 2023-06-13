import EndMessage from './EndMessage';
import StartMessage from './StartMessage';

export default function MessageList() {
  return (
    <div className="w-full h-[490px] bg-LightBeige">
      <StartMessage />
      <EndMessage />
    </div>
  );
}
