import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  where,
} from "firebase/firestore";

import { db } from "../../firebase";
import Product from "@/types/product";

const collectionName = "productos";

export const createProduct = async (product: Product) => {
  const colRef = collection(db, collectionName);
  const data = await addDoc(colRef, product);
  return data.id;
};

export const getItems = async () => {
  const colRef = collection(db, collectionName);
  const data = await getDocs(colRef);
  const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return result;
};

export const deleteItem = async (product: Product) => {
  const docRef = doc(db, collectionName, product.id);
  await deleteDoc(docRef);
};
