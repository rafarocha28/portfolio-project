export default interface Message {
  id: string;
  text: string;
  author: string;
  side: "left" | "right";
}
