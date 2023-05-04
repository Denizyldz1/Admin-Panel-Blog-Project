import React from 'react'

function BlogModal(item) {
    return(
        <div className="modal fade" id="openmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog  modal-fullscreen myModal">
            <div className="modal-content">
                <div className="modal-header fw-bold">
                    <h1 className="modal-title fs-5 w-100 fw-bold text-uppercase" id="exampleModalLabel">{item.title}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <img src={item.imageUrl} alt=".." className="img-fluid d-block mx-auto" id='modalImage' />
                <p className="my-4 col-lg-9 mx-auto">{item.content}</p>
                </div>
                <div className="modal-footer">
                    <p className="my-4 col-lg-9 mx-auto "><small className="text-muted"> Creation Date : {item.date}</small></p>
                    <button type="button" className="btn btn-danger ps-3 pe-3" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BlogModal