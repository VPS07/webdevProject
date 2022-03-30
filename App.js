import "./App.css";
import profile from "./images/logo.png";

function App(){
  return(
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
             <div className="container-image">
               <img src = {profile} alt = "profile" className = "profile"/>

             </div>


          </div>
        <div>
          <h1>any text</h1>
          <div>
             <input type="text" placeholder="username" className="name"/>
          </div>
         </div>
         <div className="second-input">
            <input type="password" placeholder="password" className="name"/>
         </div>
         <div className="login-button">
             <button>Login</button>
         </div>
         
        
           <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a>
           </p>  
         
         
         </div>
       </div>


     </div>
      
  );
}

export default App;
      
           
          
          
        
     
  

  
