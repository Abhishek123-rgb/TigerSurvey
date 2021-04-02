import React from 'react'

const Options= ({addoption , deleteoption ,updatedOptionText , uid})=> {
    return (
        <>
            <div className="col-md-8 offset-md-2 col-12 input-group my-3">
                <input type="text" className="form-control" placeholder="option text" onChange={e=>{updatedOptionText(uid , e.target.value)}}></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={()=>addoption()}>+</button>
                    <button className="btn btn-outline-secondary" type="button" onClick={()=>deleteoption()} >-</button>
                </div>             
            </div>    
        </>
    )
}

export default Options
