import React, {useState} from 'react'



function Search({handleearch=Function.prototype}) {
  const [value, setvalue] = useState("");


  const handleKey=(e)=>{
    if(e.key==="Enter"){
      handleSubmit()
    }
  }


  const handleSubmit=()=>{
    handleearch(value)
  }

  return (
    <div className="row">
      <div className='input-field col s12'>
        <input
        type="search"
        placeholder='Search...'
        onChange={(e)=> setvalue(e.target.value)}
        value={value}
        onKeyDown={handleKey}
        />
        <button
        className='btn'
        style={{position: "absolute", top:0, right:0}}
        onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Search
