import "./loader.css";
const Loading = () => {
  return (
    <div className="loader-container">
      {/* <div className="circular-loader">
        <div className="loader"></div>
      </div> */}
      <div className="load"></div> 
      <h1 className="loader-heading">Loading Doubts...</h1>
    </div>

  );
};

export default Loading;
