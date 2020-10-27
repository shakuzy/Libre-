import React , { useState , useEffect }  from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading";
import { getFirestore } from "../../firebase";

export default function Category() {
  const [data, setData] = useState([]);
  const [cargar, setCargar] = useState(false)
  const { categoryid } = useParams();
  useEffect(() => {
    setCargar(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const products= itemCollection.where('categoriesId','==',categoryid);
    products.get().then((querySnapshot) => {
      if(querySnapshot.size === 0){
        console.log("No results!");
      }
      setData(querySnapshot.docs.map(doc => {
        return({id:doc.id, ...doc.data()})
      }));
    }).catch((error) => {
      console.log("Error searching items", error);
    }).finally(() => {
      setCargar(false);
      console.clear()
      
      
    });
    
  }, [categoryid]);

  

  return cargar ? <Loading/> : <ItemDetail prod={data}/>;}
