import { useEffect, useState } from "react";
import DoubtCard from "../../components/DoubtCard/DoubtCard";
import getFirebaseData from "../../functions/getQuesData";
import Loading from "../../components/Loading/Loading";
const Container = () => {
  const [loading, setloading] = useState(true);
  const [doubts, setDoubts] = useState([]);
  // const [votes, setVotes] = useState([]);
  const fetchData = async () => {
    const result = await getFirebaseData();
    setDoubts(result);
    setloading(false);
  };


   
  useEffect(() => {
    fetchData();

  }, []);

  return (
    <div className="question-container">
      {loading && <Loading />}
      {!loading &&
        doubts.map((doubt, index) => (
          <DoubtCard
            key={index}
            name={doubt?.author_name}
            picture={doubt?.author_photo_url}
            year={doubt?.author_year}
            college={doubt?.author_college}
            date={doubt.date}
            Heading={doubt?.heading}
            content={doubt?.description}
            tags={doubt?.tags}
            likes={doubt?.net_votes}
            comments={doubt?.count_answers}
            dislikes={doubt?.net_votes}
          />
        ))}
    </div>
  );
};

export default Container;
