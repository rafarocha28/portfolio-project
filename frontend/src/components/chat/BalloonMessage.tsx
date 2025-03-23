import Message from "@/model/Message";
import MDContent from "../shared/MDContent";
import Image from "next/image";

export interface BalloonMessageProps {
  message: Message;
  ommitAuthor?: boolean;
}

export default function BalloonMessage(props: BalloonMessageProps) {
  return props.message.side === "left" ? (
    <LeftBalloon {...props} />
  ) : (
    <RightBalloon {...props} />
  );
}

function LeftBalloon(props: BalloonMessageProps) {
  return (
    <div className="flex gap-4">
      {!props.ommitAuthor && (
        <Image src="/chat.svg" alt="Assistente" width={40} height={40} />
      )}
      <div className={`flex flex-col ${props.ommitAuthor && "pl-16"}`}>
        {!props.ommitAuthor && (
          <span className="text-xs text-zinc-600">{props.message.author}</span>
        )}
        <div className="bg-black text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded-bl-3xl">
          <MDContent markdown={props.message.text} />
        </div>
      </div>
    </div>
  );
}

function RightBalloon(props: BalloonMessageProps) {
  return (
    <div className={`flex flex-col items-end ${props.ommitAuthor && "pr-2"}`}>
      {!props.ommitAuthor && (
        <span className="text-xs text-zinc-600">{props.message.author}</span>
      )}
      <div className="bg-blue-500 text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl">
        <MDContent markdown={props.message.text} />
      </div>
    </div>
  );
}
