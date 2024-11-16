import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routs from "./Routs";
import UserProvider from "./components/Dashboard/UserContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <Routs />
    </UserProvider>
  </StrictMode>
);
