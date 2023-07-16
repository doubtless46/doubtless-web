import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/Protected Route/ProtectedRoute";
import DoubtsPage from "./pages/Doubts/DoubtsPage";
import Profile from "./pages/Profile/Profile";
import { useEffect } from "react";
import { auth } from "./firebase/config";
import { useDispatch } from "react-redux";
import { setUser } from "./store/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { setLocalstorage } from "./functions/localStorage";
import Main from "./pages/Login/Main";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // settting the user in redux store
      dispatch(
        setUser({
          isLoggedIn: user ? true : false,
          userinfo: {
            name: user?.displayName,
            profileImage: user?.photoURL,
            email: user?.email,
            isVerified: user?.emailVerified,
          },
        })
      );
      // setting the loggedin info in local storage as on route change redux store reloads
      user ? setLocalstorage(true) : setLocalstorage(false);
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Main />} />
        <Route
          path="/doubts"
          element={
            <ProtectedRoute>
              <DoubtsPage />
            </ProtectedRoute>
          }
          />
          <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
