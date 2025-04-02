import React, { useEffect, useState } from 'react'
import { postMethod, updateMethod } from '../../API/ApiMethods';

const Form = ({AllPostApiData,setAllPostApiData, AllUpdateApiData, setAllUpdateApiData}) => {
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

    // Add the New Post
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
    
    // Update the Edit Button 
    let isEmpty = Object.keys(AllUpdateApiData).length == 0;
    
    // Get the Updated Data and Add into Input Field
    useEffect(()=>{
        AllUpdateApiData && setAddData ({title:AllUpdateApiData.title || "", body:AllUpdateApiData.body || ""})
    },[AllUpdateApiData])


    // Update Post Data Function
    const updatePostData = async () => {
        try {
            const resData = await updateMethod(AllUpdateApiData.id, addData);
            console.log(resData)

            setAllPostApiData((prev) => {
                // console.log(prev)
                return prev.map((curElement) => {
                    return curElement.id === AllUpdateApiData.id ? resData.data : curElement;
                })
            })
            setAllUpdateApiData({title:'',body:''})
            setAllUpdateApiData({})

        } catch (error) {
            console.log(error)
        }
    }

    // handle Form Submission
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const action = event.nativeEvent.submitter.value;
        if (action==='Add') {
            addNewPost()
        } else if (action==='Edit'){
            updatePostData()
        }
        // isEmpty ? addNewPost() : updatePostData()
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
            <button type='submit' value={isEmpty?'Add':'Edit'}>{isEmpty?'Add':'Edit'}</button>
        </form>
    </section>
  )
}

export default Form