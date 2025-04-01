import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
   try {
      const itemsRef = collection(db, "users", userId, "items");
      const itemsSnap = await getDocs(itemsRef);

      const mappedItems = itemsSnap.docs.map((itemDoc) => ({
         id: itemDoc.id,
         ...itemDoc.data()
      }));
      return mappedItems;
   } catch (error) {
      console.log("An error has occured: ", error);
   }
};

export const addItem = async (userId, item) => {
   try {
      const itemRef = await addDoc(collection(db, "users", userId, "items"), item);
      return itemRef.id;
   } catch(error) {
      console.error("An error has occured: ", error);
   }
}