import React, { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";

interface Comment {
  text: string;
  author: string;
  desc: string;
}

interface CardComponentProps {
  comments: Comment[];
}

const CardComponent: React.FC<CardComponentProps> = ({ comments }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  let scrollInterval: NodeJS.Timeout | null = null;

  useEffect(() => {
    const wrapper = wrapperRef.current;

    function autoScroll() {
      if (wrapper) {
        wrapper.scrollLeft += 2;
      }
    }

    function startAutoScroll() {
      if (!scrollInterval) {
        scrollInterval = setInterval(autoScroll, 10);
      }
    }

    function stopAutoScroll() {
      if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
      }
    }

    if (wrapper) {
      wrapper.addEventListener("mouseenter", stopAutoScroll);
      wrapper.addEventListener("mouseleave", startAutoScroll);
    }

    startAutoScroll();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
      if (wrapper) {
        wrapper.removeEventListener("mouseenter", stopAutoScroll);
        wrapper.removeEventListener("mouseleave", startAutoScroll);
      }
    };
  }, []);

  if (!comments || comments.length === 0) {
    return <div>No comments available.</div>;
  }

  return (
    <div className="wrapper" ref={wrapperRef}>
      {comments.map((comment, index) => (
        <div
          className=" div_carousel d-flex align-items-center justify-content-center"
          key={index}
        >
          <Card className="card_content border" style={{ width: "20rem" }}>
            <Card.Body className="card_body d-flex flex-column">
              <h4>{comment.text}</h4>
              <Card.Title className="card_title">
                <h5 className="mb-0">{comment.author}</h5> {comment.desc}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
