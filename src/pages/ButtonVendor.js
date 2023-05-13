import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateVendor from "./UpdateVendor";
 
function ButtonVendor() {
  return (
    <Routes>
        <Route path="vendor/update/:id" element={<UpdateVendor />}>update</Route>
    </Routes>
  );
}
export default ButtonVendor;