import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBTeauDBlymCzDUj7faJnYQtzaoeCUt3Us",
    authDomain: "my-auth-domain",
    projectId: "test-4f234",
};

export const app = initializeApp(firebaseConfig);