import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import Singleheader from './Singleheader';
import Singledetails from './Singledetails';

const Singleproduct = () => {
    const params = useParams()
    const [singledata , setSingledata] = React.useState([]);

    const getData = ()=>{
      
        axios.get(`https://api.pujakaitem.com/api/products/${params.id}`)
        .then((response)=>{
            setSingledata( response.data)
        })
      
        .catch(()=>{
          
            console.log("error occured while fetching");
        })
    }

    React.useEffect(()=>{
        getData()
    },[])
   
const {image , name , price  , reviews , description , company} = singledata;



  return (
    <>
            <Singleheader name = {name}/>
   <div className=' container mx-auto'>
    <div className='container mx-auto w-[95%] md:w-[80%] lg:flex items-center '>
            <div className='h-[395px] overflow-y-scroll scrollbar-hide flex-1 rounded-xl'>
            { image &&
                image.map((curElem , i)=>{
                    return(
                        <div key={i}>
                        
                                <img src={curElem.url} alt="" />
                        
                        </div>
                    )
                })
            }
        </div>

        <Singledetails data = {[name , price , reviews , description, company]}/>
        </div>
   </div>
    </>
  )
}

export default Singleproduct