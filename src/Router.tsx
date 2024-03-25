import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Records from "./routes/Records";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/records/:userId" element={<Records />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
