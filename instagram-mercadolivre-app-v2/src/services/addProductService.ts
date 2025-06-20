import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firebase_app from '@/lib/firebaseConfig';

const db = getFirestore(firebase_app);

export const addProduct = async (userId: string, name: string, description: string) => {
  return await addDoc(collection(db, 'products'), {
    userId,
    name,
    description,
    createdAt: serverTimestamp(),
  });
};
