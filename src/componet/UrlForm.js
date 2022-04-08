import React from "react"




const UrlForm = (props) => {

    return (
        <form className="UrlForm" onSubmit={props.NewShortURL}>
            <h2>Enter The URL</h2>
            <div className="inputU">
            <div>
              <input value={props.newUrl} onChange={props.handleUrlChange} placeholder={'Enter your link'} />
            </div>
            <div>
                <button className="button-Shotent">Shorten</button>
            </div>
            </div>
        </form>
    )
}


export default UrlForm