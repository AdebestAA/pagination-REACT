import React, { useEffect, useState } from 'react'
import PagesBtn from './PagesBtn'
   function createHundredItemsInArray() {
        let array = []
        for (let i = 1; i <= 100; i++) {
           array.push({
            number:i,
            name:"paganition "+ i
           })
            
        }
        return array
    }
const App = () => {
const [itemsArray,setItemArray] = useState(createHundredItemsInArray)
const [currentPage,setCurrentPage] = useState(1)

const itemsPerPage = 10

const indexOfLastItem = itemsPerPage * currentPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage

const currentItems = itemsArray.slice(indexOfFirstItem,indexOfLastItem)

const handlePageChangePrev = ()=>{
    
    setCurrentPage(currentPage - 1)
}

const handlePageChangeNext =()=>{
    setCurrentPage(currentPage + 1)
    
}

  return (
    <div>
      <ul>
        {currentItems.map((item,index)=>{
            return (
           <li key={index}>
                    {item.name}
                </li>
            )
        })}
      </ul>
      <PagesBtn 
      numberOfPages = {Math.ceil(itemsArray.length / itemsPerPage)}
    //   handlePageChange={handlePageChange}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      handlePageChangeNext={handlePageChangeNext}
      handlePageChangePrev={handlePageChangePrev}
      
      />
    </div>
  )
}

export default App
