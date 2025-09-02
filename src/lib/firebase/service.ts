import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export default async function retrieveData<T>(
  collectionName: string
): Promise<T[] | null> {
  try {
    const querySnapshot = await getDocs(collection(firestore, collectionName));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data as T[];
  } catch (error) {
    console.error("Error retrieving data: ", error);
    return null;
  }
}
