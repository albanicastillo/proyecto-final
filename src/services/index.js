import axios from "axios"

export const getData = async callback => {
    const response = await axios
      .get("https://leonardoapi.onrender.com/music")
      .then(res => {
        callback(res.data)
        return res.data
      })
  
    return response
  }