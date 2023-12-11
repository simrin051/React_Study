import { useNavigate } from "react-router-dom";

export const Contact = () => {
    const navigate = useNavigate();

    const navigateProfile = () => {
        /* passing value using navigate */
        navigate("/profile",{state: {
            userName: "simrin"
        }});
    }

    return (<div><h2>Inside contact</h2>
    <button type="button" onClick={navigateProfile}>Visit profile</button></div>)
}