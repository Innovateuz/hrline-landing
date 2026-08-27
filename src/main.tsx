import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// StrictMode intentionally omitted: its dev-only double-invocation of effects
// interferes with scroll/viewport animation timing (Framer Motion + Lenis).
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
