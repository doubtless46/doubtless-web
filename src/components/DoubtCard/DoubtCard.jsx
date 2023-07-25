import { useEffect, useState } from "react";
import noprofileimage from "../../assets/avatar.png";
import {BiCommentDetail} from 'react-icons/bi'
import LikeButton from "../Buttons/LikeButton";
import DislikeButton from "../Buttons/DislikeButton";
import getVotingData from "../../functions/getVotingData";
import { Link } from "react-router-dom";
const DoubtCard = ({
  authorid, 
  id,   
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
  const [likecount,setlikecount]=useState(null);
  const getVotes=async(doubtid)=>{
    const votes=await getVotingData(doubtid)
    setlikecount(votes.length);
  }
  useEffect(()=>{
    //  getVotes(id)
  },[])
  return (
    <div
      style={{
        width: "100%",
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
            <span style={{ color: "#858585", fontSize: "0.9rem" ,display:"block"}}>
              {year} Year | {college}
            </span>
          </p>
          <p style={{ color: "black" }}>{date}</p>
        </div>
      </div>
      <Link to="/comments"><div>
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
      </div></Link>
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
          <LikeButton likes={likecount ? 0 : likecount}/>
          <DislikeButton dislikes={dislikes}/>
        </div>
      </div>
    </div>
  );
};

export default DoubtCard;
