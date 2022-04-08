import React,{useState} from "react"
import UrlForm from './componet/UrlForm'
import URL from './service/create'










const App = () => {
  const [newUrl,setNewUrl] = useState('')
  const [sortUrl,setsortUrl] = useState('')

  const handleUrlChange = (event)=>{
    console.log(`Url: ${event.target.value}`)
    setNewUrl(event.target.value)
  }
  const NewShortURL = (event)=>{
    event.preventDefault()
    URL.create(newUrl)
    .then(returnedUrl=>{
      setsortUrl(returnedUrl)
      
    })
  }
  console.log(`short Url is ${sortUrl}`)
  return(
    <div>
    <p>Hello world</p>
    <UrlForm onSubmit={NewShortURL} newUrl={newUrl} handleUrlChange={handleUrlChange}/>
  </div>
  )
  }

export default App