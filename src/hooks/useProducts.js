import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../db/db.js";
import { getDataConnect } from "firebase/data-connect";

const useProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async() => {
    try {
      const dataDb = await getDocs( collection(db, "products") );
      
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() }
      })

      setProducts(data);
      setLoading(false);
    } catch (error) {
      
    }
  }

  const getProductByCategory = async() => {
    try {
      const q= query ( collection(db, "products"), where("category","==", category) );
      const dataDb = await getDocs(q)

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() }
      })

      setProducts(data);
      setLoading(false);

    } catch (error) {
      
    }
  }

  useEffect(()=> {
    
    if (category) {
      getProductByCategory();
    }else{
      getProducts();
    }

  }, [category])

  return { products, loading };
};

export default useProducts;