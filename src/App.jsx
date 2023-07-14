import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/Protected Route/ProtectedRoute";
import DoubtsPage from "./pages/Doubts/DoubtsPage";
import { useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
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

  // Function to get Firebase data
  async function getFirebaseData() {
    const db = getFirestore();
    const dataRef = collection(db, "AllDoubts"); // Replace "your_collection_name" with the actual name of your collection
    console.log(dataRef)
    try {
      const snapshot = await getDocs(dataRef);
      const data = snapshot.docs.map((doc) => doc.data());
      console.log('data',data)
      return data;
      
    } catch (error) {
      console.error("Error getting Firebase data:", error);
      return null;
    }

  }

  useEffect(() => {
    const fetchData = async () => {
      await getFirebaseData();
    };
    fetchData();
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
      </Routes>
    </>
  );
};

export default App;
