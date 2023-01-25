import { firestore } from "../firebase";
import { query, getDocs,collection, limit, orderBy, where, } from "firebase/firestore";  
import { randomArray } from "../utils/utils";

const N_QUESTIONS = 24;

export const getQuestions = () => {
    const ids = randomArray(N_QUESTIONS);
    const items = query(collection(firestore, "Questions"), where("id", 'in', ids));
    return getDocs(items);
};