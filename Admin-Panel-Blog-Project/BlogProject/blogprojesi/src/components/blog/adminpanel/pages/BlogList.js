import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../../context/DataContext'
import PageHeader from './PageHeader'
import DeleteModal from './DeleteModal'
import { Link } from 'react-router-dom';


function BlogList() {
  const [filter, setFilter] = useState({ status: null, active: null });
  const context = useContext(dataContext);
  const [data, setData] = useState([])
  const [selectedDataId, setSelectedDataId] = useState(0)
  const [refresh, setRefresh] = useState(false)
  function changeRefresh() {
    setRefresh(!refresh);
  };
  useEffect(() => {
    context.blogListesi().then((res) => {
      setData(res.data);
    })
  }, [refresh,filter]);

  return (
    <>

      <div className='content-wrapper'>
        <PageHeader title={"Bloglar"} />
        <div className='content'>
          <div className="card">
            <div className="card-header d-flex">
              <h3 className="card-title">BlogListesi</h3>
              <div id='BlogListButtonDiv' className="btn-group btn-group-sm m-auto" role="group" aria-label="Small button group">
                <button type="button" className="btn btn-outline-primary" onClick={()=>{
                  setFilter({ status: null, active: null });

                }}>Tüm Postları Görüntüle</button>
                <button type="button" className="btn btn-outline-primary" onClick={()=>{
                  setFilter({ status: true, active: null });

                }} >Ana Sayfada Gösterilen Postları Görüntüle</button>
                <button type="button" className="btn btn-outline-primary" onClick={()=>{
                   setFilter({ status: null, active: true });
                }}>Aktif Postları Görüntüle</button>
              </div>
              <div className="card-tools">
                <div className="input-group input-group-sm" >
                  <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />

                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body table-responsive p-0" >
              <table className="table table-head-fixed text-nowrap">
                <thead>
                  <tr>
                    <th>ISLEMLER</th>
                    <th>ID</th>
                    <th>BAŞLIK</th>
                    <th>AÇIKLAMA</th>
                    <th>TARİH</th>
                    <th>RESİM-URL</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    data
                    .filter(item => {
                      if (filter.status !== null && item.status !== filter.status) {
                        return false;
                      }
                      if (filter.active !== null && item.active !== filter.active) {
                        return false;
                      }
                      return true;
                    })
                    .map((item, index) => {

                        return (
                          <tr key={index}>
                            <td>
                              <div className="btn-group" role="group" aria-label="Basic example">
                                <Link to={`/admin/updateblog/${item.id}`} className="btn btn-primary me-1">Güncelle</Link>
                                <button type="button" className="btn btn-danger" onClick={() => {
                                  setSelectedDataId(item.id);
                                }} data-bs-toggle="modal" data-bs-target="#deleteModal">Sil</button>
                              </div>
                            </td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td><span className="tag tag-success">{item.date}</span></td>
                            <td>{item.imageUrl}</td>
                          </tr>
  
                        )



                    })
                  }

                </tbody>
              </table>
              <DeleteModal refresh={changeRefresh} id={selectedDataId} />
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default BlogList