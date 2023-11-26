import ReactDOM from "react-dom/client";
import { StyleSheetManager } from "styled-components";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StyleSheetManager shouldForwardProp={(prop) => prop !== "completed"}>
    <App />
  </StyleSheetManager>
);
