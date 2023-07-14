import React, { useState } from 'react';

const DoubtCard = () => {
  const [like, setlike] = useState(false)
  const [unlike, setunlike] = useState(false)
  const handleLike = () => {
    setlike(!like)
    }
const handleUnlike = () => {
    setunlike(!unlike)
    }
  const [doubts, setDoubts] = useState([
    {
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      year: "2nd Year",
      college: "ABC University",
      date: "30 days ago",
      Heading: "Help me with my resume",
      content: "I am a 2nd year student and I need help with my resume.",
      tags: "Resume, Placement, Internship",
      engagement: { likes: 10, comments: 5, dislikes: 1 },
    },
    {
      picture: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Jane Smith",
      year: "3rd Year",
      college: "XYZ College",
      date: "1 month ago",
      Heading: "React Doubt",
      content: "How can I style components in React?",
      tags: "Resume, Placement, Internship",
      engagement: { likes: 15, comments: 3, dislikes: 2 },
    },
    {
      picture: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Sam Johnson",
      year: "1st Year",
      college: "DEF Institute",
      date: "15 days ago",
      Heading: "Placement Doubt",
      content: "What is the placement procedure for the 2022 batch?",
      tags: "Resume, Placement, Internship",
      engagement: { likes: 7, comments: 4, dislikes: 1 },
    },
  ]);

  return (
    <div>
      {doubts.map((doubt, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          {/* Display doubt data */}
          <div style={{ width: "500px", height: "170px", backgroundColor: "white", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ borderRadius: "50%", width: "48px", height: "48px" }}
                src={doubt.picture}
                alt="Profile"
              />
              <div style={{ marginLeft: "10px" }}>
                <p style={{ color: "black" }}>{doubt.name} | {doubt.year} | {doubt.college}</p>
                <p style={{ color: "black" }}>{doubt.date}</p>
              </div>
            </div>
            <h3 style={{ color: "black" }}>{doubt.Heading}</h3>
            <p style={{ color: "black" }}>{doubt.content}</p>
            <br/>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ color: "gray", fontSize: "13px" }}>Tags: {doubt.tags}</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ color: "black", paddingRight:"5px" }}>{doubt.engagement.comments}</p><img src="src/assets/comment.png" alt="comments" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                <p style={{ color: "black", paddingRight:"5px" }}>{doubt.engagement.likes}</p><img src={like?"src/assets/liked.png":"src/assets/like.png"} alt="like" onClick={handleLike} style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                <p style={{ color: "black", paddingRight:"5px" }}>{doubt.engagement.dislikes}</p><img src={unlike?"src/assets/disliked.png":"src/assets/dislike.png"} alt="dislike" onClick={handleUnlike} style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoubtCard;
