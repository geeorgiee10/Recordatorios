import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
  // your application settings
  apiKey: "AIzaSyAaectM4s-FybkpUmlsxocK5SPoF3orgXY",
  authDomain: "notasjorge-81270.firebaseapp.com",
  projectId: "notasjorge-81270",
  storageBucket: "notasjorge-81270.firebasestorage.app",
  messagingSenderId: "1075045502590",
  appId: "1:1075045502590:web:419c238f61f16cac6a922f",
  measurementId: "G-XFPX1GVYE1"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const recordatoriosRef = collection(db, 'Recordatorios')