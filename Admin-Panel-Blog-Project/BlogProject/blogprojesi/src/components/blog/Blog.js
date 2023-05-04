import React, { useContext, useEffect, useState } from 'react'
import Footer from '../myPortfolio/Footer'
import Navbar from '../myPortfolio/Navbar'
import BlogModal from './BlogModal';
import { dataContext } from './context/DataContext';




function Blog() {
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");

    const context = useContext(dataContext);
    const [data, setData] = useState([])
    useEffect(() => { 
        context.blogListesi().then((res) => {
            setData(res.data);
            
        }); 
    }, []);
    return (
        <>
            <Navbar />           
            <div className='container' id='blogPostContainer'>
                {
                    data.map((item, index) => {
                        if(item.active==true){
                            const date = new Date(item.date);
                            const dateString = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
                            return (
                                <div className="card mb-3 postCard border-0" key={index}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.imageUrl} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold">{item.title}</h5>
                                                <p className="card-text">{item.description}</p>
                                                <p className="card-text"><small className="text-muted"> Creation Date : {dateString}</small></p>
                                                <button className="btn btn-danger float-end mt-5" onClick={()=>{
                                                    setTitle(item.title),
                                                    setContent(item.content),
                                                    setImageUrl(item.imageUrl),
                                                    setDate(dateString)
                                                }} data-bs-target="#openmodal" data-bs-toggle="modal">Go somewhere</button>
    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                       
                    })
                }
            </div>
           {
            <BlogModal  title={title} imageUrl={imageUrl} content={content} date={date} />

           }
           <Footer />
        </>
    )
}

export default Blog