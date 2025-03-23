import ChatButton from "@/components/chat/ChatButton";

export default function Layout(props: {children: React.ReactNode}) {
  return (
    <div>
      {props.children}
      <ChatButton />
    </div>
  );
}