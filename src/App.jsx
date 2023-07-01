import { Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/Protected Route/ProtectedRoute";
import DoubtsPage from "./pages/Doubts/DoubtsPage";

const App = () => {
  return (
    <>
      <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/doubts" element={<ProtectedRoute>
            <DoubtsPage/>
          </ProtectedRoute>} />
      </Routes>
    </>
  );
};

export default App;
