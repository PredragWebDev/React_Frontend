import "./navigation.css";

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar'>
      <div className="nav-bar">
        
        <h1>
          <img src="./img/logo.PNG" alt="" className="nav-logo"/>
          TrandingPlace
        </h1>

        <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
          <a href = "/signup" id="get_started_btn" className="getstared-btn">GET STARTED</a>
          <a href ="/login" id="login_btn" className="login-btn">LOG IN</a>

        </div>
      </div>
    </nav>
  )
}
