import { createRoot } from "react-dom/client";
import { setBaseUrl } from "@workspace/api-client-react";
import App from "./App";
import "./index.css";

// Configure API base URL for backend communication
const apiBaseUrl = import.meta.env.VITE_API_URL || "https://astra-vastra.onrender.com";
setBaseUrl(apiBaseUrl);

createRoot(document.getElementById("root")!).render(<App />);
