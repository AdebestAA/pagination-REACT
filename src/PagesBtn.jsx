import React, { useEffect, useState } from 'react'

function pagesArray(numberOfPages) {
    let arr  = []
    for (let i = 1; i <= numberOfPages; i++) {
      arr.push(i)
    }
    return arr

}

const BtnStyle = {background:"black",color:"white",width:"30px"} 

const PagesBtn = ({numberOfPages,handlePageChangePrev,handlePageChangeNext,setCurrentPage,currentPage}) => {

const [pages,setPages] = useState(pagesArray(numberOfPages))

  

  return (
      <div>
      <button
      onClick={handlePageChangePrev}
      disabled={currentPage === 1 ? true : false}
        style={currentPage === 1? {background:"gray",color:"white",fontWeight:"700"} : {background:"yellow",color:"white",fontWeight:"700"}}
      >
        prev
        </button>
      {pages.map((num,index)=> <button 
      style={currentPage === index + 1  ? {background:"red",color:"white",width:"30px"}: {background:"black",color:"white",width:"30px"}  } 
      key={index}
      onClick={()=> setCurrentPage(index + 1)}
    //   style={}
      >
        {num}
      </button>)}
      <button
      onClick={handlePageChangeNext}
      disabled={currentPage === pages.length ? true : false}
      style={currentPage === pages.length ? {background:"gray",color:"white",fontWeight:"700"} : {background:"green",color:"white",fontWeight:"700"}}>next</button>
    </div>
  )
}

export default PagesBtn
