import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { dataContext } from '../blog/context/DataContext';
import BlogModal from '../blog/BlogModal';


function Posts() {
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
    
    <section id='posts'>
      <div className='container mt-5'>
        <div className="text-center mb-5">
          <h2 className="s-heading text-uppercase fw-bold">Posts</h2>
          <h3 className="s-subheading text-muted fs-5"  id='postText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            molestiae?</h3>
            {
                    data.map((item, index) => {

                      
                      if(item.status==true && item.active==true){

                        const date = new Date(item.date);
                        const dateString = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()

                        
                        return (
                          <div className="card mb-3 postCard border-0" key={index}>
                              <div className="row g-0">
                                  <div className="col-md-4">
                                      <img src={item.imageUrl} className="img-fluid rounded-start" alt="..." />
                                  </div>
                                  <div className="col-md-8">
                                      <div className="card-body d-flex flex-column">
                                          <h5 className="card-title fw-bold text-start ml-3">{item.title}</h5>
                                          <p className="card-text">{item.description}</p>
                                         <div className='container d-flex justify-content-between position-absolute bottom-0 end-0 mb-2'>
                                         <p className="card-text"><small className="text-muted"> Creation Date : {dateString}</small></p>
                                          <button className="btn btn-danger" onClick={()=>{
                                                    setTitle(item.title),
                                                    setContent(item.content),
                                                    setImageUrl(item.imageUrl),
                                                    setDate(dateString)
                                                }} data-bs-target="#openmodal" data-bs-toggle="modal">Go somewhere</button>
                                         </div>

                                      </div>
                                  </div>
                              </div>
                          </div>
                      )
                      }

                    })
                }
          <Link to="/postlist" className="btn btn-danger mt-5 px-5">All posts wiew</Link>
        </div>
      </div>
        {
          <BlogModal  title={title} imageUrl={imageUrl} content={content} date={date} />

           }

    </section>
  )
}

export default Posts