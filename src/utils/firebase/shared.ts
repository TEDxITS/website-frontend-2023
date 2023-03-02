// Utility functions for handling firebase auth error
// TODO: find the real types for this
export const handleFirebaseError = (error: {
  code: string;
  message: string;
}) => {
  switch (error.code) {
    case 'auth/invalid-email':
      return 'Invalid email address.';
    case 'auth/user-disabled':
      return 'User account has been disabled.';
    case 'auth/user-not-found':
      return 'User account not found.';
    case 'auth/wrong-password':
      return 'Incorrect password.';
    case 'auth/email-already-in-use':
      return 'Email address already in use.';
    case 'auth/weak-password':
      return 'Password is too weak.';
    case 'auth/popup-closed-by-user':
      return 'Login cancelled.';
    case 'auth/internal-error':
      return 'Incorrect password.';
    default:
      return 'An error occurred.';
  }
};
