import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('1').collection('cartItems').doc('1')

firestore.doc('/users/1/cartItems/1');
firestore.collection('/users/1/cartItems');