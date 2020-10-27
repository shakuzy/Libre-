import React , { useState , useEffect }  from "react";


export default function Item(props) {
  const [data, setData] = useState([]);

  useEffect((data) => {
  const task = new Promise((resolve, reject) => {
    setTimeout(() => resolve(props.p), 3000);
  });
    task.then(response => {
      setData(response);
    })
    
  }, [])
 
  return (<ul>
     {data.map(element => <li id={element.id} key={element.id}>{element.name}</li>)}
    </ul>
    
    );

}


 


 




