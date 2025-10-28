import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./config/i18next.jsx";
import "./index.css";
import store from "./config/store.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
