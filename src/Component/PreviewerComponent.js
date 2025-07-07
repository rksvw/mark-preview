import { marked } from "marked";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { LiaFreeCodeCamp } from "react-icons/lia";
import "./Preview.css";

export default function PreviewerComponent({ markdown }) {
  marked.setOptions({
    breaks: true,
  });
  return (
    <>
      <div className="col-md-6 preview_card">
        <div className="preview_toolbar">
          <LiaFreeCodeCamp className="code_icon" /> Editor
          <FaExpandArrowsAlt className="arrow_icon" />
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        ></div>
      </div>
    </>
  );
}
