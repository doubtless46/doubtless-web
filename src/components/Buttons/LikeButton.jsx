import { useState ,memo} from "react";
import { AiOutlineLike ,AiFillLike} from "react-icons/ai";

const LikeButton = ({likes}) => {
  const [like, setlike] = useState(false);
  const handleLike = () => {
      setlike(!like);
    };
  return (
      <div  style={{display:"flex",minWidth:"100px",padding:"0.5em 1em" ,backgroundColor:"#3A3B3C",borderRadius:"10px",alignItems:"center",margin:"0 0.7em",justifyContent:"center"}} onClick={handleLike}>
      <div  style={{fontSize:"1.5rem",color:`${like ? "white":""}`}}>
      {like ? <AiFillLike />:<AiOutlineLike/>}
      </div>

        <p style={{ color: "white", paddingRight: "5px",marginLeft:"0.5em",fontWeight:"bold"}}>{parseInt(likes)}</p>
      </div>
  )
}

export default memo(LikeButton);
