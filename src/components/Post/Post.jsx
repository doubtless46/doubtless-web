import "./post.css";
import { useState, useRef ,useEffect} from "react";
const availableTags = [
  "attendance",
  "teachers",
  "detained",
  "sushil",
  "placements",
];
import { useSelector } from "react-redux";
const Post = () => {
  const textareaRef = useRef(null);
  const divRef = useRef(null);
  const [showdescription, setshowdescription] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const { userinfo } = useSelector((state) => state.user);
  const handleTextareaChange = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset the height to auto
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height based on the content
  };
  const handleInputBlur = () => {
    setshowdescription(true);
  };
  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      // Remove tag if already selected
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      // Add tag if not selected
      setSelectedTags([...selectedTags, tag]);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setshowdescription(!setshowdescription);
      }
    };

    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);
  return (
    <div className="post-container">
      <div className="input-container">
        <div style={{ width: "60px" }} className="pfp">
          <img src={userinfo?.author_photo_url} />
        </div>
        <div className="input-doubt" onClick={handleInputBlur}>
          <input type="text" placeholder="Ask or Post Something"/>
        </div>
      </div>
      {/*  */}
      {showdescription && (
        <>
          {" "}
          <div className="input-wrapper" ref={divRef}>
            <div className="description">
              <textarea
                ref={textareaRef}
                placeholder="Wrtie description"
                onChange={handleTextareaChange}
              >
              </textarea>
            </div>
            <div className="seo">
              <h4>SEO Keywords</h4>
              <p>
                Write keywords here that will help the doubt rank in
                search.Seperate them with commas. Eg:"Btech,attendance,Sushil"
              </p>
              <div className="input-doubt">
                <input type="text" placeholder="Write keywords here" />
              </div>
            </div>
            <div className="tags-container">
              <h4>Select Tags</h4>
              <div className="tag-list">
                {availableTags.map((tag) => (
                  <div
                    key={tag}
                    className={`tag ${
                      selectedTags.includes(tag) ? "selected" : ""
                    }`}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </div>
                ))}
              </div>
              {selectedTags.length > 0 && (
                <>
                  <h3>Selected Tags:</h3>
                  <div className="selected-tags">
                    {selectedTags.map((tag) => (
                      <div key={tag} className="selected-tag">
                        {tag}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

          </div>
        </>
      )}
      <div className="post">
              <button>Post</button>
            </div>
    </div>
  );
};

export default Post;
