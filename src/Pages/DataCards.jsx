// import React from 'react';
// import { NavLink } from 'react-bootstrap';

// const DataCards = ({MedicineData}) => {
//     const {user,tags,previewURL,likes} = MedicineData
//   return (
//     <>
              
//             <div className="main-section">
//               {/* <Link to={`/medicineDetail/${user}`}>
//             <img src={previewURL} alt={tags} />
//             <h1>Id : {item.id}</h1>
//             <p>{user}</p>
//             </Link>  */}
//             <div className="main-data">
//             <img src={previewURL} alt="Image Tags" />
//             <h2>Title : {user} <span className='likes'><img src="/images/heart.png" alt="" width={25} height={25}/> {likes}</span> </h2>
//             <p>Tags : {tags}</p>
//             <div className="buttons">
//             <button type='submit'>Edit</button>
//             <button type='submit'>Delete</button>
//           </div>
//           </div>
//           </div>
//           </>
//   )
// }

// export default DataCards;


import React from 'react'
import './DataCards.css'  // Import CSS file for card styling

const DataCards = ({ MedicineData }) => {
  const { user, tags, previewURL, likes } = MedicineData

  return (
    <div className="card">
      <img src={previewURL} alt={tags} className="card-img" />
      <div className="card-content">
        <h3 style={{display:'flex', justifyContent:'space-between'}}>{user} <span className="likes">❤️ {likes}</span></h3>
        <p style={{fontSize:'13px'}}><strong>Tags:</strong> {tags}</p>
        <div className="buttons">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default DataCards
