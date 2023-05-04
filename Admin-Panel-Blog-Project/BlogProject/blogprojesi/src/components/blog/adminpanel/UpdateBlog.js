import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dataContext } from '../context/DataContext';
import PageHeader from './pages/PageHeader';


function UpdateBlog() {
    const {id} = useParams();
    const context = useContext(dataContext);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(false);
    const [active, setActive] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    useEffect(()=>{
        context.dispatch({
            type:"getblog",
            id:id,
            callback:fillData
        });
    },[]);
    function fillData(data){
       setTitle(data.title);
       setContent(data.content);
       setDescription(data.description);
       setImageUrl(data.imageUrl);
       setStatus(data.status);
       setActive(data.active);
    }
    return (
      <>
        <div className='content-wrapper'>
          <PageHeader title={"Blog Güncelle"} />
          <div className='content'>
            <section className="content">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Blog Bilgileri</h3>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="baslik">Başlık</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" name='baslik' id="baslik" value={title} placeholder="Blog Başlığı" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="aciklama">Açıklama</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} className="form-control" name='aciklama' id="aciklama" value={description} placeholder="Blog Açıklaması" />
                  </div>
                  <div className="form-group d-flex justify-content-around">
                    <div className="form-check">
                      <input className="form-check-input" onChange={(e) => setStatus(e.target.checked)} checked ={status} type="checkbox" id="aktiflik" />
                      <label className="form-check-label">Ana Sayfada Göster</label>
                      </div>
                      <div className="form-check">
                      <input className="form-check-input" onChange={(e) => setActive(e.target.checked)} checked ={active} type="checkbox" id="aktiflik" />
                      <label className="form-check-label">Aktif Et</label>
                      </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="icerik">İçerik</label>
                    <textarea onChange={(e) => setContent(e.target.value)} rows="3" className="form-control" value={content} name='icerik' id="icerik"></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="resimUrl">Resim Url</label>
                    <input type="text" onChange={(e) => setImageUrl(e.target.value)} className="form-control" name='resimUrl' id="resimUrl" value={imageUrl} placeholder="../images/example.png" />
                  </div>
  
                </div>
  
                <div className="card-footer">
                  <button onClick={() => {
                    const date = new Date();
                    context.dispatch(
                      {
                        type: "updateblog",
                        id:id,
                        data: {
                          id:id,
                          title: title,
                          description: description,
                          content: content,
                          status: status,
                          active: active,
                          date:date,
                          imageUrl:imageUrl
                        }
                      }
                    );
                    setTitle("");
                    setContent("");
                    setDescription("");
                    setStatus(false);
                    setActive(false);
                    
                  }} className='btn btn-primary float-end' type='button'>Kaydet</button>
                </div>
  
              </div>
  
            </section>
          </div>
        </div>
      </>
  
    )
}

export default UpdateBlog;
