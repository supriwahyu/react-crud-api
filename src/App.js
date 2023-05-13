import "./App.css";
import Layout from "./components/shared/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthContextProvider } from "./components/shared/AuthContext";
import FavouriteMovie from "./pages/FavouriteMovie";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import Update from "./pages/Update";
import View from "./pages/View";
import Vendor from "./pages/Vendor";
import Worker from "./pages/Worker";
import Orders from "./pages/Orders";
import Shipments from "./pages/Shipments";
import UpdateVendor from "./pages/UpdateVendor";
import UpdateWorker from "./pages/UpdateWorker";
 
function App() {
  return (
    <>
      <AuthContextProvider>
        <Layout>
          <Routes>
            <Route index element={<Home />}></Route>
 
            <Route
              path="/login"
              element={
                <ProtectedRoute accessBy="non-authenticated">
                  <Login />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/fav-movies"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <FavouriteMovie />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/products/:id"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <Update />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/vendor"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <Vendor />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/worker"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <Worker />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="orders"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <Orders />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="shipments"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <Shipments />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/productsView/:id"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <View />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/vendor/:id"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <UpdateVendor />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/worker/:id"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <UpdateWorker />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </Layout>
      </AuthContextProvider>
    </>
  );
}
export default App;