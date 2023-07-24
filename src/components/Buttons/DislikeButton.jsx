import { useState,memo } from "react"
import { AiOutlineDislike,AiFillDislike} from "react-icons/ai";

const DislikeButton = ({dislikes}) => {
      const [unlike, setunlike] = useState(false);
      const handleUnlike = () => {
            setunlike(!unlike);
      };
  return (
      <div  style={{display:"flex",minWidth:"100px",padding:"0.5em 1em" ,backgroundColor:"#3A3B3C",borderRadius:"10px",alignItems:"center",margin:"0 0.7em",justifyContent:"center"}} onClick={handleUnlike} className="buttons">
      <div  style={{fontSize:"1.5rem",color:`${unlike ? "white":""}`}}>
     {unlike ? <AiFillDislike/>: <AiOutlineDislike/> }
      </div>

      <p style={{ color: "white", paddingRight: "5px",marginLeft:"0.5em",fontWeight:"bold"}}>{parseInt(dislikes)}</p>
      </div>
  )
}

export default memo(DislikeButton);
