import React, { useState } from 'react';
import { deleteMethod, getMethod } from '../../API/ApiMethods';
import { useEffect } from 'react';
import './AllPosts.css';
import Form from './Form';

const AllPosts = () => {
  const [getApiData, setGetApiData] = useState([]);
  const getData = async () => {
    const response = await getMethod();
    console.log(response.data);
    setGetApiData(response.data)
  }

  useEffect(() => {
    getData();
  }, [])

  // For Deleting the Post
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
<>
    <section>
      <Form AllPostApiData={getApiData} setAllPostApiData={setGetApiData}/>
    </section>

    <section className='section-post'>
        <div className="row">
      <div className="grid-container">
        {
          getApiData.map((currElement,index)=>{
            const {id, title, body} = currElement; // Destructuring the Data
            return (
              <div className="col-md-4 card-box" key={index}>
                <p><b>Id :</b> {id}</p>
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
    </>
  )
}

export default AllPosts;

