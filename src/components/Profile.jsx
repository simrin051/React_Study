import {useLocation} from 'react-router-dom';

export const Profile = () => {
    const location = useLocation();
    return (<h2>Inside profile {location.state.userName} </h2>) 
}