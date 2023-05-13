import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./Update";
 
function Button() {
  return (
    <Routes>
        <Route path="/update/:id" element={<Update />}>update</Route>
    </Routes>
  );
}
export default Button;