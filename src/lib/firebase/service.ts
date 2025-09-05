import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
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

export async function retrieveDataById<T>(
  collectionName: string
): Promise<T | null> {
  try {
    const querySnapshot = await getDoc(doc(firestore, collectionName));

    const data = querySnapshot.data();
    return data as T;
  } catch (error) {
    console.error("Error retrieving data By Id: ", error);
    return null;
  }
}
