import { useState } from "react";
import noprofileimage from '../../assets/avatar.png'
// eslint-disable-next-line react/prop-types
const DoubtCard = ({picture,name,year,college,date,Heading,content,tags,comments,likes,dislikes}) => {
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
        width: "70%",
        minHeight: "200px",
        backgroundColor: "white",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin:"1em 0",
        borderBottom:"1px solid grey",
        cursor:"pointer"
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ borderRadius: "50%", width: "48px", height: "48px" }}
          src={picture ? picture : noprofileimage}
          alt="Profile"
        />
        <div style={{ marginLeft: "10px" }}>
          <p style={{ color: "black" }}>
            {name} | {year} Year | {college}
          </p>
          <p style={{ color: "black" }}>{date}</p>
        </div>
      </div>
      <h3 style={{ color: "black" }}>{Heading}</h3>
      <p style={{ color: "black" }}>{content}</p>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ color: "gray", fontSize: "13px" }}>Tags: {tags.map(item => item+" ")}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ color: "black", paddingRight: "5px" }}>
            {comments}
          </p>
          <img
            src="src/assets/comment.png"
            alt="comments"
            style={{ width: "20px", height: "20px", marginRight: "20px" }}
          />
          <p style={{ color: "black", paddingRight: "5px" }}>
            {Number(likes).toFixed(0)}
          </p>
          <img
            src={like ? "src/assets/liked.png" : "src/assets/like.png"}
            alt="like"
            onClick={handleLike}
            style={{ width: "20px", height: "20px", marginRight: "20px" }}
          />
          <p style={{ color: "black", paddingRight: "5px" }}>
            {dislikes}
          </p>
          <img
            src={unlike ? "src/assets/disliked.png" : "src/assets/dislike.png"}
            alt="dislike"
            onClick={handleUnlike}
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DoubtCard;
