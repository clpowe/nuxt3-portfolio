import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCEKwcqx4u0QQlK8n36XraJxGAe2R5GERE',
	authDomain: 'my-protfolio-3f5e5.firebaseapp.com',
	projectId: 'my-protfolio-3f5e5',
	storageBucket: 'my-protfolio-3f5e5.appspot.com',
	messagingSenderId: '886110716117',
	appId: '1:886110716117:web:dc43681947a2013bb7e25c'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Init Services
const db = getFirestore()

export { db }
