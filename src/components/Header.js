import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, PROFILE_LOGO } from "../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const {uid,email,displayName} = user.uid;
    dispatch(addUser({uid : uid, email : email, displayName : displayName}))
    navigate("/browse");

    // ...
  } else {
    // User is signed out
    dispatch(removeUser())
    navigate("/");

    // ...
  }
});

  return () => unsubscribe();

  },[])
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="usericon" src={PROFILE_LOGO} />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
