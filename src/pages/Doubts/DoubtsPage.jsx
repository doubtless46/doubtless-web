import { useDispatch } from "react-redux";
import { auth } from "../../firebase/config";
import { setUser } from "../../store/slices/userSlice";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
const DoubtsPage = () => {
  // since user is alreaddy there if doubt page loaded.
  const [isUser,setIsuser]=useState(true);
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
    <div>
      doubts bro
      <button
        onClick={async () =>{}
        }
      >
        Signout
      </button>
    </div>
  );
};

export default DoubtsPage;
