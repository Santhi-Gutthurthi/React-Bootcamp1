//import {useParams} from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";


function Productinfo(){
    const {id}=useEffect();
    const [data,setData] = useState([]) 
    // console.log(id)
    const  amazon="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575/"+id
    useEffect(()=>{
        Singleproduct()
    },[])
    const Singleproduct = () =>{
        axios.get(amazon).then((response) => {
            setData(response.data);            
        });
    }
    return(
        <div>
            <h1>Single Product</h1>
            <div className="card">
                    <img src={data.image} alt=" "/>
                    <p>{data.title}</p>
                    <p>{data.price}</p>
                    <p>{data.category}</p>
            </div> 
            {/* {api} */}
        </div>
    )
}
export default Productinfo;