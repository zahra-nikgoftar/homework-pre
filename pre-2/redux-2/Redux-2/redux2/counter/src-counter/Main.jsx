import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
