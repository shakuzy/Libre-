import React , { useState , useEffect }  from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading";
import { getFirestore } from "../../firebase";

export default function Productos() {
  const [data, setData] = useState([]);
  const [cargar, setCargar] = useState(false)

  useEffect(() => {
    setCargar(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
   itemCollection.get().then((querySnapshot) => {
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
    
  }, []);

  

  return cargar ? <Loading/> : <ItemDetail prod={data}/>;}