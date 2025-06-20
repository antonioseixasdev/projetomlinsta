import { getFirestore, collection, query, where, getDocs, DocumentData } from 'firebase/firestore';
import firebase_app from '@/lib/firebaseConfig';

const db = getFirestore(firebase_app);

export const getUserProducts = async (userId: string): Promise<DocumentData[]> => {
  const productsRef = collection(db, 'products');
  const q = query(productsRef, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
