import { useDispatch } from "react-redux";
import { auth } from "../../firebase/config";
import { setUser } from "../../store/slices/userSlice";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Doubts.css";
import Doubtsnav from "../../components/Doubtsnav/Doubtsnav";
import Profile from "../../components/ProfileComp/Profile";
import Post from "../../components/Post/Post";
import Container from "./Container";
const DoubtsPage = () => {
  // since user is alreaddy there if doubt page loaded.
  const [isUser, setIsuser] = useState(true);
  const dispatch = useDispatch();
  const user = useAuthState(auth);
  const getUser = async () => {
    // onAuthStateChanged(auth, (user) => {
      // settting the user in redux store
      // dispatch(
      //   setUser({
      //     isLoggedIn: user ? true : false,
      //     userinfo: {
      //       name: user?.displayName,
      //       profileImage: user?.photoURL,
      //       email: user?.email,
      //       isVerified: user?.emailVerified,
      //     },
      //   })
      // );
    // });
  };
  useEffect(() => {
    // getUser();
  }, []);
  return (
    <div className="doubts-container">
      <Doubtsnav />
      <div className="data-container">
        <div className="left-container">
          <Profile data={user} />
        </div>
        <div className="middle-container">
          <Post data={user} />
          <Container />
        </div>
      </div>
    </div>
  );
};

export default DoubtsPage;
