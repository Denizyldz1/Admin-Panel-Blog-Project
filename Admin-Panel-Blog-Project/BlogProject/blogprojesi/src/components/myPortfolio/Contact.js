import React, { useEffect } from 'react'
import { useState } from 'react';

function Contact() {
    const [textMessage, setTextMessage] = useState(0)

    useEffect(()=>{
    },[textMessage]);
  return (
    <section id="contact" className="mySection bg-light" >
    <div className="container pt-5">
        <div className="text-center mb-5 pb-3">
            <h2 className="s-heading text-uppercase fw-bold text-black ">İletişim</h2>
            <h3 className="s-subheading text-black fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                porro.</h3>
        </div>
        <form className="needs-validation" action="result.php" id="FrmContact" noValidate>
            <div className="row align-items-strech">
                <div className="col-md-6">
                    <div className="form-floating mb-4">
                        <input type="text" id="name"  className="form-control" placeholder="Adınız" 
                        required maxLength="40" aria-describedby="ErrName"/>
                        <label htmlFor="name">Adınız
                            <span className="text-danger" aria-hidden="true">*</span>
                            <span className="visually-hidden">Zorunlu Alan</span>
                        </label>
                        <div className="invalid-feedback fw-bold text-white" id="ErrName"></div>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="email" id="email" className="form-control" placeholder="Eposta" 
                        required maxLength="100" aria-describedby="ErrEmail"/>
                        <label htmlFor="name">Eposta Adresiniz
                            <span className="text-danger" aria-hidden="true">*</span>
                            <span className="visually-hidden">Zorunlu Alan</span>
                        </label>
                        <div className="invalid-feedback fw-bold text-white" id="ErrEmail"></div>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="tel" id="phone" className="form-control" placeholder="Telefon Numaranız" 
                        required maxLength="15" aria-describedby="ErrPhone"/>
                        <label htmlFor="name">Telefon Numaranız
                            <span className="text-danger" aria-hidden="true">*</span>
                            <span className="visually-hidden">Zorunlu Alan</span>
                        </label>
                        <div className="invalid-feedback fw-bold text-white" id="ErrPhone"></div>
                    </div>
                </div>
                <div className="col md-6">
                    <div className="form-floating form-textarea mb-md-0">
                        <textarea id="message" onChange={(e)=>{
                            setTextMessage(e.target.textLength);

                        }} className="form-control" placeholder="Mesajınız" 
                        required maxLength="300" aria-describedby="ErrMessage"></textarea>
                        <label htmlFor="message">Mesajınız
                            <span className="text-danger" aria-hidden="true">*</span>
                            <span className="visually-hidden">Zorunlu Alan</span>
                        </label>
                        <div className="invalid-feedback fw-bold text-white" id="ErrMessage"></div>
                    </div>
                    <div className="text-white text-end">
                        <span id="current-character">{textMessage}</span>
                        <span> / 300</span>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-danger btn-lg text-uppercase py-3" id="BtnContact">
                    Mesaj Gönder
                </button>
            </div>
        </form>
        <div className="row"></div>
    </div>
    </section>
  )
}

export default Contact