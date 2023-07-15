import { useState } from "react";
import noprofileimage from "../../assets/avatar.png";
import { AiOutlineLike ,AiOutlineDislike,AiFillLike,AiFillDislike} from "react-icons/ai";
import {BiCommentDetail} from 'react-icons/bi'
const DoubtCard = ({
  picture,
  name,
  year,
  college,
  date,
  Heading,
  content,
  tags,
  comments,
  likes,
  dislikes,
}) => {
  const [like, setlike] = useState(false);
  const [unlike, setunlike] = useState(false);
  const handleLike = () => {
    setlike(!like);
  };
  const handleUnlike = () => {
    setunlike(!unlike);
  };
  return (
    <div
      style={{
        width: "600px",
        minHeight: "200px",
        backgroundColor: "#1A1A1A",
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "1em 0",
        borderRadius: "12px",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ borderRadius: "50%", width: "40px", height: "40px" }}
          src={picture ? picture : noprofileimage}
          alt="Profile"
        />
        <div style={{ marginLeft: "10px" }}>
          <p
            style={{
              color: "#C2C2C2",
              fontFamily: "Rubik,sans-serif",
              fontWeight: "400",
              fontSize: "1rem",
            }}
          >
            {name}{" "}
            <p style={{ color: "#858585", fontSize: "0.9rem" }}>
              {year} Year | {college}
            </p>
          </p>
          <p style={{ color: "black" }}>{date}</p>
        </div>
      </div>
      <h3 style={{ color: "white" }}>{Heading}</h3>
      <p
        style={{
          color: "#C2C2C2",
          borderBottom: "1px solid #3A3B3C",
          padding: "1em 0",
        }}
      >
        {content}
      </p>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{marginRight:"1em"}}>
          <p style={{ color: "gray", fontSize: "13px" }}>
            Tags: {tags.map((item) => item + " ")}
          </p>
        </div>
        <div style={{display:"flex",alignItems:"center" }}>
          <div style={{display:"flex",minWidth:"100px",padding:"0.5em 1em" ,backgroundColor:"#3A3B3C",borderRadius:"10px",alignItems:"center",margin:"0 0.7em",justifyContent:"center"}}>
            <div style={{fontSize:"1.5rem"}}>
            <BiCommentDetail />
            </div>
            <p style={{ color: "white", paddingRight: "5px" ,marginLeft:"0.5em",fontWeight:"bold"}}>{comments}</p>
          </div>
          <div  style={{display:"flex",minWidth:"100px",padding:"0.5em 1em" ,backgroundColor:"#3A3B3C",borderRadius:"10px",alignItems:"center",margin:"0 0.7em",justifyContent:"center"}} onClick={handleLike}>
          <div  style={{fontSize:"1.5rem",color:`${like ? "red":""}`}}>
          {like ? <AiFillLike />:<AiOutlineLike/>}
          </div>

            <p style={{ color: "white", paddingRight: "5px",marginLeft:"0.5em",fontWeight:"bold"}}>{parseInt(likes)}</p>
          </div>
          <div  style={{display:"flex",minWidth:"100px",padding:"0.5em 1em" ,backgroundColor:"#3A3B3C",borderRadius:"10px",alignItems:"center",margin:"0 0.7em",justifyContent:"center"}} onClick={handleUnlike}>
          <div  style={{fontSize:"1.5rem",color:`${unlike ? "blue":""}`}}>
         {unlike ? <AiFillDislike/>: <AiOutlineDislike/> }
          </div>

          <p style={{ color: "white", paddingRight: "5px",marginLeft:"0.5em",fontWeight:"bold"}}>{parseInt(dislikes)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubtCard;
