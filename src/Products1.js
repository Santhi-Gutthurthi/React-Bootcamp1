// import { useState, useEffect } from "react"
// import axios from "axios"
// import { Link } from "react-router-dom"
// import './Product.css';

// function Products1(){
//     const [data,setData] = useState([]) //const data=[]
//     const [category,setCategory] = useState([]) //const category=[]
//     //const [cnt, setCnt] = useState(0) // const cnt =0
//     const [selectcat,setSelectcat] = useState('');
//     useEffect(()=>{
//         getproductslist()
//         getcategory()
//     },[selectcat])
//     // const getproductslist = ()=>{
//     //     axios.get('https://fakestoreapi.com/products').then((response)=>{
//     //        // console.log(response.data)
//     //        let res = response.data
//     //        if(selectcat === ''){
//     //         setData(res)
//     //        }else{
//     //         // console.log("sss")
//     //         // console.log(selectcat)
//     //         let filtered_data = res.filter((ele)=>{
//     //             return (ele.category === selectcat)
//     //            console.log(filtered_data)
//     //            setData(filtered_data)
//     //        }           
//     //     })
//     // }
//     const getproductslist = ()=>{
//         axios.get('https://fakestoreapi.com/products').then((response)=>{
//            // console.log(response.data)
//            let res = response.data
//            if(selectcat === ''){
//             setData(res)
//            }else{
//            // console.log(selectcat)
//             let filtered_data = res.filter((ele)=>{
//                 return (ele.category === selectcat)
//                })
//             if(filtered_data.length == 0){
//                 setData(res)
//             }else{
//                 setData(filtered_data)
//             }               
//            }           
//         })
//     }
//     const getcategory = ()=>{
//         axios.get('https://m.media-amazon.com/images/I/').then((response)=>{
//            // console.log(response.data)
//             setCategory(response.data)
//         })
//     }
//     return(
//         <>
//             <h1>PRODUCTS</h1>
//             {/* <p>{cnt}</p>
//             <button onClick={()=>setCnt(cnt +1 )}>Incr by 1</button> */}
//             <div>
//                 <select style={{width:"300px",height:"30px"}} value={selectcat} onChange={(e)=>setSelectcat(e.target.value)}>
//                     <option>--select category</option>
//                     {category.map((ele) => (
//                     <option key={ele} value={ele}>
//                         {ele}
//                     </option>
//                     ))}
//                 </select>
//             </div>
//             <div className="products-list">
//             {
//                 data.map((ele,i)=>{
//                     return(
//                         <div className="card" key={i}>
//                             <Link to={`../productinfo/${ele.id}`}><img src={ele.image} alt="" /></Link>
//                             {/* <a href={`../singleproduct/1`}><img src={ele.image} alt="" /></a> */}
//                             <p>{ele.title}</p>
//                             <p>{ele.price}</p>
//                             <p>{ele.category}</p>
//                         </div>
//                     )
//                 })
//             }
//             </div>
//         </>
//     )
// }
// export default Products1;


import {useParams} from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";


function Products1(){
    const {id}=useParams();
    const [data,setData] = useState([]) 
    // console.log(id)
    const api = 'https://m.media-amazon.com/images/I/'+id
    useEffect(()=>{
        singleproduct()
    },[])
    const singleproduct = () =>{
        axios.get(api).then((response) => {
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
export default Products1;
