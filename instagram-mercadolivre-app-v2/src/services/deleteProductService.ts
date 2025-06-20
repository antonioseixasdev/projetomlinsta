import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import firebase_app from '@/lib/firebaseConfig';

const db = getFirestore(firebase_app);

export const deleteProduct = async (productId: string) => {
  await deleteDoc(doc(db, 'products', productId));
};
