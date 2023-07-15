import { useDispatch } from "react-redux";
import { auth } from "../../firebase/config";
import { setUser } from "../../store/slices/userSlice";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { logout } from "../../functions/logout";
import DoubtCard from "./Container";
import "./Doubts.css";
import Doubtsnav from "../../components/Doubtsnav/Doubtsnav";
const DoubtsPage = () => {
  // since user is alreaddy there if doubt page loaded.
  const [isUser, setIsuser] = useState(true);
  const dispatch = useDispatch();
  const user = useAuthState(auth);
  const getUser = async () => {
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
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="doubts-container">
      <Doubtsnav />
        <DoubtCard />
    </div>
  );
};

export default DoubtsPage;
