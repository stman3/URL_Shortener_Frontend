import React from "react"





const copyonClick =(UrlShort)=>{
    return null
}

const Result =(props)=>{
    console.log(props.sortUrl.shortUrl)
    if(!props.sortUrl){
        return null
    }
    else{
        return(
            <div className="boxResult">
               {props.sortUrl.shortUrl}
            </div>
        )
    }
}


export default Result