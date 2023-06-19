type MessageProps = {
  idx: number;
  row: string;
  isCurrentUser: boolean;
  userEmail: string[];
};

export default function MessageItem({
  idx,
  row,
  isCurrentUser,
  userEmail,
}: MessageProps) {}
