import React from 'react'

function Education() {
  return (
    <section id="education" className="mySection bg-light">
        <div className="container">
            <div className="text-center mb-5 pb-3">
                <h2 className="s-heading text-uppercase fw-bold pt-5">Education</h2>
                <h3 className="s-subheading text-muted fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                    porro.</h3>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="t-member text-center">
                        <img className="mx-auto rounded-circle"
                            src="https://upload.wikimedia.org/wikipedia/tr/9/92/Istanbul_Universitesi.png" alt=".." />
                        <h4>İstanbul Üniversitesi</h4>
                        <p className="text-muted">İktisat Fakultesi</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="t-member text-center">
                        <img className="mx-auto rounded-circle"
                            src="https://pbs.twimg.com/profile_images/1272872741843226624/W0wdKtWv_400x400.jpg"
                            alt=".." />
                        <h4>Wissen Akademie</h4>
                        <p className="text-muted">Full Stack Developer</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="t-member text-center">
                        <img className="mx-auto rounded-circle"
                            src="https://teknosafari.net/wp-content/uploads/2021/01/udemy-nedir-udemy-nasil-kullanilir.jpg"
                            alt=".." />
                        <h4>UDEMY</h4>
                        <p className="text-muted">+15 Developer Course Certificate</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis quam ullam
                        quasi aspernatur, minus quas odio quos maiores dolorum.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education