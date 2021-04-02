import React from 'react'

const Typeselector =({Qtype , setQType})=> {
    return (
        <>
          <div className="col-md-6 offset-md-3 col-12">
            <select className="custom-select" value={Qtype} onChange={(e)=>{ let type = parseInt(e.target.value); setQType(type); }}> 
            <option value="0">Choose the following</option>
                <option value="1">Multi-select</option>
                <option value="2">Single-Select</option>
            </select>
        </div>  
        </>
    )
}

export default Typeselector
