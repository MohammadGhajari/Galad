import {ref, deleteObject } from "firebase/storage";
import toast from "react-hot-toast";
import {addProfile} from "../StateManagement/UserSlice.js";

const firebaseConfig = {
  apiKey: "AIzaSyDV9Yk9MYkZ5Adz_sBPeELmU6k2RyGMBHE",
  authDomain: "galad-project.firebaseapp.com",
  projectId: "galad-project",
  storageBucket: "galad-project.appspot.com",
  messagingSenderId: "991438559924",
  appId: "1:991438559924:web:609b354b53ebec3242d5e1"
};


firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const database = firebase.database();


export function newUser(username, value) {
  database.ref(`users/${username}`).set(value);
}

export function getUser(userName) {
  return new Promise((resolve, reject) => {

    const userRef = database.ref(`users/${userName}`);
    userRef.on('value', function (snapshot) {
      const data = snapshot.val();
      data ? resolve(data) : resolve('no such user available');
    });

  });
}

export function updateUser(userName, updatedData) {
  database.ref(`users/${userName}`).update(updatedData);
}

export function removeUser(userName) {
  database.ref(`users/${userName}`).remove();
}

export function getAllUsers() {
  return new Promise((resolve, reject) => {

    const userRef = database.ref(`users`);
    userRef.on('value', function (snapshot) {
      const data = snapshot.val();
      data ? resolve(data) : reject('no data available');
    });

  });
}

export function uploadImage(file, fileName, setIsUploading, dispatch) {

  setIsUploading(true);

  const storageRef = storage.ref().child("profileImage");
  const folderRef = storageRef.child(fileName);
  const uploadTask = folderRef.put(file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
    },
    (error) => {
      toast.error('File Not Uploaded');
      console.log('erooooooooooooor');
      setIsUploading(false);
    },
    () => {
      storage
        .ref("profileImage")
        .child(fileName)
        .getDownloadURL()
        .then((url) => {
          dispatch(addProfile(url));
          console.log(url)
        });
      toast.success('File Uploaded Successfully');
      setIsUploading(false);
    }
  );
}

export function deleteImage (fileName) {
  const storage = firebase.storage();
  const fileRef = storage.ref(`profileImage/${fileName}`); // Replace with the actual path to your file

  fileRef.delete()
    .then(function() {
      toast.success('File deleted successfully')
    })
    .catch(function(error) {
      toast.error('File not deleted')
    });
}

export function getImage () {
  const storage = firebase.storage();
  const imageRef = storage.ref().child('profileImage');

  imageRef.getDownloadURL()
    .then((url) => {
      console.log("Image URL:", url);
    })
    .catch((error) => {
      console.error("Error getting image URL:", error);
    });


}

export function getAllImages () {
  const storageRef = storage.ref();
  const directoryRef = storageRef.child('profileImage');

  directoryRef.listAll()
    .then((result) => {
      result.items.forEach((imageRef) => {
        imageRef.getDownloadURL()
          .then((url) => {
            console.log("Image URL:", url);
          })
          .catch((error) => {
            console.error("Error getting image URL:", error);
          });
      });
    })
    .catch((error) => {
      console.error("Error listing items in directory:", error);
    });
}
