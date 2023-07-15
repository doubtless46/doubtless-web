import { getFirestore, collection, getDocs } from "firebase/firestore";

async function getVotingData({ userDoubtId }) {
    // replace below id with user
    userDoubtId="017f0a53-bc63-45bc-b293-aefc313e10a4"
    console.log('uid',userDoubtId)
    const db = getFirestore();
    const dataRef = collection(db, "doubt_voting_data", userDoubtId, "upvoted_users");
    try {
      const snapshot = await getDocs(dataRef);
      const upvotedData = snapshot.docs.map((doc) => doc.data());
      console.log("upvotedData", upvotedData);
      return upvotedData;
    } catch (error) {
      console.error("Error getting Firebase upvoted data:", error);
      return null;
    }
  }
  


export default getVotingData;
