import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { User } from 'firebase/auth';
import firebase_app from '@/lib/firebaseConfig';

const db = getFirestore(firebase_app);

export const saveUserToFirestore = async (user: User) => {
  if (!user) return;
  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName || '',
      email: user.email || '',
      photoURL: user.photoURL || '',
      provider: user.providerData[0]?.providerId || '',
      createdAt: serverTimestamp(),
    });
  }
};
