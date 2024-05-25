import React from 'react'
const Container = (props) => {
  return (
      <div className="mx-auto container p-5  ">
        <div className=" flex justify-between mt-3">
        <input 
          type="text" 
          className='shadow-[1px_1px_5px_gray] h-9 w-80 rounded pl-4 ' 
          placeholder='search.....'
          value={props.search}
          onChange={(e)=> (props.setSearch(e.target.value))}
          />
          
        <select name="" id="" placeholder='Select contries' className='shadow-[1px_1px_5px_gray] border  h-9 w-40 rounded' onChange={(e)=>{props.setUrl(e.target.value); props.setCount([])}}>
            <option value="All">All</option>
            <option value="region/Africa">Africa</option>
            <option value="region/America">America</option>
            <option value="region/Asia">Asia</option>
            <option value="region/europe">Europe</option>
            <option value="region/oceania">Oceania</option>
            
        </select>
        </div>
      
      </div>
    
  )
}

export default Container
