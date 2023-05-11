import admin, { ServiceAccount } from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { cookies } from 'next/headers';

interface TemporaryUserDataType extends DecodedIdToken {
  role: 'admin' | 'user';
}

export const fireConfig: ServiceAccount = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
};

// This is a server function, so it will only run on the server
export const getCurrentUser = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('tedxits2023-firebase')?.value || 'No Token';

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(JSON.stringify(fireConfig))),
    });
  }

  try {
    const userData: DecodedIdToken = await admin.auth().verifyIdToken(token);
    const userDataWithRoles: TemporaryUserDataType = {
      ...userData,
      role: userData.email === 'admin@tedxits.org' ? 'admin' : 'user',
    };

    return userDataWithRoles;
  } catch (error) {
    // TODO: Handle server error
    return null;
  }
};
