import "./App.css";
import EditorComponent from "./Component/EditorComponent";
import PreviewerComponent from "./Component/PreviewerComponent";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        backgroundColor: "#87b5b5"
      }}
    >
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <EditorComponent />
      </div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <PreviewerComponent />
      </div>
    </div>
  );
}

export default App;
