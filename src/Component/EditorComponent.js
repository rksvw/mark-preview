import { FaExpandArrowsAlt } from "react-icons/fa";
import { LiaFreeCodeCamp } from "react-icons/lia";
import "./Editor.css";

export default function EditorComponent({ markdown, setMarkdown }) {
  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="editorWrap">
      <div className="toolbar">
        <LiaFreeCodeCamp className="code_icon" /> Editor
        <FaExpandArrowsAlt className="arrow_icon" />
      </div>

      <textarea value={markdown} id="editor" onChange={handleMarkdownChange}></textarea>
    </div>
  );
}
