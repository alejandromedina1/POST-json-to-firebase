import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(app);

//Change "collectionName" for the name of your collection
const addDataToCollection = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "collectionName"), data);
    console.log(docRef);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

//_______________________________________________________________________________________

//Import the data from the JSON file
const jsonFileData = async () => {
  try {
    const response = await fetch("file.json");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error al cargar el archivo JSON:", error);
    return error;
  }
};

const data = jsonFileData();
data.then((data) => {
  data.forEach((document) => {
    //addDataToCollection(document);
  });
});
