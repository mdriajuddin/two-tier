import axios from "axios";
import React from "react";

const baseURL = "http://127.0.0.1:8000/";


export default function Products() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    //   console.log(response.data);
    });
  }, []);

  if (!post) return null;
  
  const ProductItems = post.map((product) =>
    <div key={product.id.toString()}>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
    </div>
    );
    
  return (
    <div>    
      {ProductItems}
     
    </div>

  

)}


// import useAxios from 'axios-hooks'

// const baseURL = "http://127.0.0.1:8000/";

// export default function Products() {
//   const [{ data, loading, error }, refetch] = useAxios(
//     baseURL
//   )

//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Error!</p>

//   return (
//     <div>
//       <button onClick={refetch}>refetch</button>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   )
// }