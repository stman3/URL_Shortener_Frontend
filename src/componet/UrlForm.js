import React from "react"




const UrlForm = (props)=>{

    return(
        <form onSubmit={props.NewShortURL}>
         <h2>Enter The URL</h2>
         <div>
             URL: <input value={props.newUrl} onChange={props.handleUrlChange} />
         </div>
         <div>
             <button type="submit">submit</button>
         </div>
        </form>
    )
}


export default UrlForm