import React, { useState } from 'react';
import { deleteMethod, getMethod } from '../../API/GetPostsApi';
import { useEffect } from 'react';
import './GetApiData.css'

const GetApiData = () => {
  const [getApiData, setGetApiData] = useState([]);
  const getData = async () => {
    const response = await getMethod();
    console.log(response.data);
    setGetApiData(response.data)
  }

  useEffect(() => {
    getData();
  }, [])

  const handleDeletePost = async (id) => {
   const res = await deleteMethod(id)
   console.log(res);
   try {
    if(res.status === 200){
      const newUpdatedData = getApiData.filter((fillElement)=>{
        return fillElement.id !== id;
      })
      setGetApiData(newUpdatedData)
    }else{
      console.log('Failed to Delete the Post:',res.status)
    }
   } catch (error) {
    console.log(error)
   }
   
  }

  return (
    <section className='section-post'>
        <div className="row">
      <div className="grid-container">
        {
          getApiData.map((currElement)=>{
            const {id, title, body} = currElement; // Destructuring the Data
            return (
              <div className="col-md-4 card-box" key={id}>
              <p><b>Title :</b> {title}</p>
              <p><b>Body :</b> {body}</p>
              <div className="btns">
              <button style={{background:'green', margin:'10px'}}>Edit</button>
              <button style={{background:'red', margin:'10px'}} onClick={()=>handleDeletePost(id)}>Delete</button>
              </div>
        </div>
            )
          })
        }
        </div>
        </div>
    </section>
  )
}

export default GetApiData

