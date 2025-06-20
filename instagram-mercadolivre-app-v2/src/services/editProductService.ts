import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import firebase_app from '@/lib/firebaseConfig';

const db = getFirestore(firebase_app);

export const editProduct = async (id: string, name: string, description: string) => {
  await updateDoc(doc(db, 'products', id), {
    name,
    description,
  });
};
