import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const Blogs = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
      }

    return (<div><h2>Inside blogs {id}</h2><br/>
      <button type="button" onClick={handleClick}>
      Go home
    </button>
    </div> )

}