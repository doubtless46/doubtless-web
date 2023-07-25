import React from "react";
import "./DoubtCommentPage.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Doubtsnav from "../../components/Doubtsnav/Doubtsnav";
import Profile from "../../components/ProfileComp/Profile";
import { BiCommentDetail } from "react-icons/bi";
import LikeButton from "../../components/Buttons/LikeButton";
import DislikeButton from "../../components/Buttons/DislikeButton";
import { useSelector } from "react-redux";

const DoubtCommentPage = () => {
  const [isUser, setIsuser] = useState(true);
  const dispatch = useDispatch();
  const user = useAuthState(auth);
  const { userinfo } = useSelector((state) => state.user);

  // Placeholder values
  const picture = "https://randomuser.me/api/portraits/men/32.jpg";
  const name = "John Doe";
  const year = "3rd";
  const college = "Example University";
  const Heading = "Sample Heading";
  const content = "This is a sample comment content.";
  const tags = ["React", "JavaScript", "Web Development"];
  const comments = 10;
  const likecount = 5;
  const dislikes = 2;


  const [replyList, setReplyList] = useState([
    {
      dpicture: "https://randomuser.me/api/portraits/men/31.jpg",
      dname: "Dohn Joe",
      dyear: "3rd",
      dcollege: "Example University",
      reply: "This is a sample reply.",
      dlikecount: 4,
      ddislikes: 12,
    },
    {
      dpicture: "https://randomuser.me/api/portraits/women/30.jpg",
      dname: "Jane Smith",
      dyear: "2nd",
      dcollege: "Another University",
      reply: "This is another sample reply.",
      dlikecount: 10,
      ddislikes: 2,
    },
  ]);
  return (
    <>
      <div className="doubts-container">
        <Doubtsnav />
        <div className="data-container">
          <div className="left-container">
            <Profile data={user} />
          </div>
          <div className="middle-container">
            <div className="question-container">
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
                    style={{
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                    }}
                    src={picture}
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
                      <span
                        style={{
                          color: "#858585",
                          fontSize: "0.9rem",
                          display: "block",
                        }}
                      >
                        {year} Year | {college}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
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
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginRight: "1em" }}>
                    <p style={{ color: "gray", fontSize: "13px" }}>
                      Tags: {tags.map((item) => item + " ")}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        display: "flex",
                        minWidth: "100px",
                        padding: "0.5em 1em",
                        backgroundColor: "#3A3B3C",
                        borderRadius: "10px",
                        alignItems: "center",
                        margin: "0 0.7em",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ fontSize: "1.5rem" }}>
                        <BiCommentDetail />
                      </div>
                      <p
                        style={{
                          color: "white",
                          paddingRight: "5px",
                          marginLeft: "0.5em",
                          fontWeight: "bold",
                        }}
                      >
                        {comments}
                      </p>
                    </div>
                    <LikeButton likes={likecount ? 0 : likecount} />
                    <DislikeButton dislikes={dislikes} />
                  </div>
                </div>
              </div>
            </div>
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
                  src={userinfo?.author_photo_url}
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
                    {userinfo?.author_name}{" "}
                    <span
                      style={{
                        color: "#858585",
                        fontSize: "0.9rem",
                        display: "block",
                      }}
                    >
                      2nd Year | MSIT
                    </span>
                  </p>
                </div>
              </div>
              <div class="form__group">
                <input
                  type="input"
                  class="form__field"
                  placeholder="Enter your answer here..."
                />
                <label for="name" class="form__label">
                  Enter your answer here...
                </label>
              </div>
              <br />
              {replyList.map((replyItem, index) => (
              <div
                key={index}
                style={{
                  width: '100%',
                  minHeight: '200px',
                  backgroundColor: '#1A1A1A',
                  padding: '1em',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  margin: '1em 0',
                  borderRadius: '12px',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    style={{ borderRadius: '50%', width: '40px', height: '40px' }}
                    src={replyItem.dpicture}
                    alt="Profile"
                  />
                  <div style={{ marginLeft: '10px' }}>
                    <p
                      style={{
                        color: '#C2C2C2',
                        fontFamily: 'Rubik,sans-serif',
                        fontWeight: '400',
                        fontSize: '1rem',
                      }}
                    >
                      {replyItem.dname}{' '}
                      <span style={{ color: '#858585', fontSize: '0.9rem', display: 'block' }}>
                        {replyItem.dyear} Year | {replyItem.dcollege}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <p>{replyItem.reply}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ marginRight: '1em' }}>
                    <p style={{ color: 'gray', fontSize: '13px' }}>
                    <LikeButton likes={replyItem.dlikecount ? 0 : replyItem.dlikecount} />
                    <DislikeButton dislikes={replyItem.ddislikes} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoubtCommentPage;
