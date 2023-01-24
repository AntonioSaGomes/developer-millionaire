import { firestore } from "../firebase";
import { collection, getDocs,limit } from "firebase/firestore";  


export const getQuestions = () => {
    const items = collection(firestore, "Questions");
    return getDocs(items);
};