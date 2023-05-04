import React from 'react'

function Login() {

    const LoginHandle = ()=>{
        var userName= document.getElementById("emailaddress").value;
        var password= document.getElementById("pass").value;
        if (userName=="admin" && password=="123456" ){
            setCookie("username", "dyildiz", 1)
            window.location.href="/admin/bloglist"
        }
        else {
            alert("bilgiler hatalı");
        }
        
    }
  return (
    <div className='login-page'>
    <div className="login-box">
  <div className="login-logo">
   <b>Admin</b>
  </div>
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>

        <div className="input-group mb-3">
          <input type="email" id='emailaddress' className="form-control" placeholder="Email"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" id='pass' className="form-control" placeholder="Password"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember"/>
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          <div className="col-4">
            <button onClick={LoginHandle} className="btn btn-primary btn-block">Sign In</button>
          </div>
        </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Login