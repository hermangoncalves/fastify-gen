import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages";

function RedirectToHome() {
  return <Navigate to="/" replace />;
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<RedirectToHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
