import { getFirestore, collection, getDocs,query,limit } from "firebase/firestore";

async function getFirebaseData() {
      const db = getFirestore();
      const dataRef = collection(db, "AllDoubts"); // Replace "your_collection_name" with the actual name of your collection
      try {
        const q = query(dataRef, limit(6)); // Add the limit to the query
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => doc.data());
      //   console.log('data',data)
        return data;
      } catch (error) {
        console.error("Error getting Firebase data:", error);
        return null;
      }
  
    }


export default getFirebaseData;    