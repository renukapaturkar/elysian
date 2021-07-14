import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthProvider"
import '../css/Login.css';
import { toastText } from "../utils/toast";


const UserProfile = () => {
    const {token, setToken, userDetails, setUserDetails} = useAuth();
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token", JSON.stringify({isUserLoggedIn: false, token: ""}));
        localStorage.removeItem("userData", JSON.stringify({isUserLoggedIn: false, userData: ""}))
        setToken("");
        setUserDetails(null)
        navigate('/')
        toastText("Logged out! see you soon!")
    }



    return (
        <div className="userprofile-container">
            
            <div>
                <span><b>Email address:</b> </span>
                <span>{userDetails?.email}</span>
            </div>
            <div>
                <span><b>Name:</b> </span>
                <span>{userDetails?.name}</span>
            </div>

            <div>You are logged in! Shop your favorites!</div>
            <button className="btn btn-dark-hover" onClick={()=> logout()}>Logout</button>
        </div>
    )
}

export default UserProfile;