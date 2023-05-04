import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';

export const dataContext = React.createContext();

var url = "https://localhost:7004/api/";
var reducer = (state, action) => {
    if (action.type == "addblog") {
        console.log(url+"Blogs",action.data)
        return axios.post(url+"Blogs",action.data)
        
    }
    else if(action.type=="deleteblog"){
        axios.delete(url+"Blogs/"+action.id).finally(()=>{
            return null;
        })
    }
    else if(action.type=="getblog"){
         axios.get(url+"Blogs/"+action.id).then((resp)=>{
           action.callback(resp.data);
         })
    }
    else if(action.type=="updateblog"){
        return axios.put(url+"Blogs/"+action.id,action.data)

   }
}

function getBlogs() {
    return axios.get(url + "Blogs");
}
function DataContext(props) {
    const [state, dispatch] = useReducer(reducer, Promise)
    return (
        <dataContext.Provider value={{ blogListesi:getBlogs, dispatch:dispatch }}>
            {props.children}
        </dataContext.Provider>
    )
}

export default DataContext