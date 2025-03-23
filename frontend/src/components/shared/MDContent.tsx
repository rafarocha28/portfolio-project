import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export interface MDContentProps {
  markdown: string;
}

export default function MDContent(props: MDContentProps) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      skipHtml={false}
    >
      {props.markdown}
    </Markdown>
  );
}
