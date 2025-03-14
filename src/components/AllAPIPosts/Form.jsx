import React, { useState } from 'react'
import { postMethod } from '../../API/ApiMethods';

const Form = ({AllPostApiData,setAllPostApiData}) => {
    const [addData,setAddData] = useState({
        title:"",
        body:""
    })

    // Handle Input 
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev)=>{
            // console.log(prev)
            return {
                ...prev, [name]:value
            }
        })
    }

    // Adding New Post
    const addNewPost = async () => {
      const res = await postMethod(addData);
      console.log(res)
    try {
        if (res.status === 201) {
            setAllPostApiData([...AllPostApiData,res.data])
            setAddData({title:'',body:''})
        }        
    } catch (error) {
        console.log(error)
    }
    }

    // handle Form
    const handleFormSubmit = (event) => {
        event.preventDefault()
        addNewPost()
    }

  return (
    <section>
        <form onSubmit={handleFormSubmit}>
            <div className="title-input">
                <label htmlFor="title"></label>
                <input 
                type="text" 
                placeholder='Add Title' 
                id='title' 
                name='title' 
                autoComplete='off'
                value={addData.title}
                onChange={handleInputChange}/>
            </div>
            <div className="body-input">
                <label htmlFor="body"></label>
                <input 
                type="text" 
                placeholder='Add Post' 
                id='body' 
                name='body' 
                autoComplete='off'
                value={addData.body}
                onChange={handleInputChange}/>
            </div>
            <button type='submit'>Add Post</button>
        </form>
    </section>
  )
}

export default Form