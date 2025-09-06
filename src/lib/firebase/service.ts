import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
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

export async function signUp(
  userData: { email: string; password: string; fullName: string },
  callback: () => void
): Promise<any> {
  try {
    // const q = await query(collection(firestore, "users"), where("email", "==", userData.email")))

    const user = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    if (user.length > 0) {
      return res;
    }
  } catch (error) {
    console.error("Error retrieving data: ", error);
    return null;
  }
}
