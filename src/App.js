import React, { useState } from "react"
import UrlForm from './componet/UrlForm'
import Header from "./componet/Header"
import { createNewLink } from './service/URLService'
import './componet/global.css'










const App = () => {
  const [newUrl, setNewUrl] = useState('')
  const [sortUrl, setsortUrl] = useState('')

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }
  const NewShortURL = async (event) => {
    event.preventDefault()
    const response = await createNewLink(newUrl)
    setsortUrl(response)
  }
  console.log("sort url:"+sortUrl.shortUrl)
  return (
    
    <div className="app">
      <Header/>
      <UrlForm NewShortURL={NewShortURL} newUrl={newUrl} handleUrlChange={handleUrlChange} />
    </div>
  )
}

export default App