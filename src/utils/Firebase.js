import firebase from 'firebase'
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid'


const firebaseConfig = {
  apiKey: "AIzaSyCZrDUF8lG0n22TYsCgJkODOEp7BcL5Tx0",
  authDomain: "instagram-clone-timo.firebaseapp.com",
  projectId: "instagram-clone-timo",
  storageBucket: "instagram-clone-timo.appspot.com",
  messagingSenderId: "1076485365600",
  appId: "1:1076485365600:web:1708cf96e94e1dd85b4805",
  measurementId: "G-TKT7CEVY0N"
  };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }


const Firebase = {
  uploadPost: post => {
    const id = uuid()
    const uploadData = {
      id: id,
      postPhoto: post.photo,
      postTitle: post.title,
      postDescription: post.description,
      likes: []
    }
    return firebase
      .firestore()
      .collection('posts')
      .doc(id)
      .set(uploadData)
  },
  getPosts: () => {
    return firebase
      .firestore()
      .collection('posts')
      .get()
      .then(function(querySnapshot) {
        let posts = querySnapshot.docs.map(doc => doc.data())
        // console.log(posts)
        return posts
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error)
      })
  }
}

export default Firebase