import AppRouter from "./routes/AppRouter";
import "./css/global/themes.css";
import "./css/global/variables.css";
import "./css/global/fonts.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
