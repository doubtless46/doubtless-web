import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/Protected Route/ProtectedRoute";
import DoubtsPage from "./pages/Doubts/DoubtsPage";
import { useEffect } from "react";
import { auth } from "./firebase/config";
import { useDispatch } from "react-redux";
import { setUser } from "./store/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { setLocalstorage } from "./functions/localStorage";
import Main from "./pages/Login/Main";
import ProfilePage from "./pages/Profile/ProfilePage";
import DoubtCommentPage from "./pages/DoubtCommentPage/DoubtCommentPage";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // settting the user in redux store
      dispatch(
        setUser({
          isLoggedIn: user ? true : false,
          userinfo: {
            author_id:user?.uid,
            author_name: user?.displayName,
            author_photo_url: user?.photoURL,
            author_email : user?.email,
            isVerified: user?.emailVerified,
            author_college:"",
            author_year:""
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
              <ProfilePage/>
            </ProtectedRoute>
          }
        />
        <Route
        path="/comments"
        element={
          <ProtectedRoute>
            <DoubtCommentPage/>
          </ProtectedRoute>
        }
      />
      </Routes>
    </>
  );
};

export default App;
