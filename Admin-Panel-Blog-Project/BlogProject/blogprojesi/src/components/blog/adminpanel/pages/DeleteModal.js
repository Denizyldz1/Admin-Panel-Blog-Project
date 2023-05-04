import React, { useContext } from 'react'
import { dataContext } from '../../context/DataContext'

function DeleteModal(p) {
    const context = useContext(dataContext);

  return (
    <div className="modal" id='deleteModal' tabIndex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{p.id} numaralı ID li kayıt silinecektir</h5>
        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Bu silme işlemi geri alınamaz.Silmek istediğinizden emin misiniz?</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{
            context.dispatch ({
                type:"deleteblog",
                id:p.id
            }); 
            p.refresh();
        }}>Evet Sil</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hayır Silme</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default DeleteModal