// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import DataCards from './DataCards'

// const Medicine = () => {
//   const [data,setData] = useState([])
//   const API = 'https://pixabay.com/api/?key=46716351-74415b3d819751f1f66877a5f&q=yellow+medicine&image_type=photo'

//   const handleAPIData = async () => {
//     try {
//       const res = await axios.get(API);
//       const gettedData = res.data.hits;
//       console.log(gettedData);
//       setData(gettedData)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     handleAPIData()
//   }, [])
  
//   return (
//     <>
//     <div>All Medicines</div>
//     <ul>
//       {data.map((item,index)=>{
//         return <DataCards key={index} MedicineData = {item}/>
//       })}
//     </ul>
//     </>
//   )
// }

// export default Medicine

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataCards from './DataCards'
import './Medicine.css'  // Import CSS file for grid styling

const Medicine = () => {
  const [data, setData] = useState([])
  const API = 'https://pixabay.com/api/?key=46716351-74415b3d819751f1f66877a5f&q=yellow+medicine&image_type=photo'

  const handleAPIData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.hits);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleAPIData()
  }, [])

  return (
    <>
      <h2 className="title">All Medicines</h2>
      <div className="grid-container">
        {data.map((item) => (
          <DataCards key={item.id} MedicineData={item} />
        ))}
      </div>
    </>
  )
}

export default Medicine
