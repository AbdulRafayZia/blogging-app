


import "./Login.css"
export default function Login( ) {
  
    return(
        <section className="Container">
            <h1 className="heading">Login to Account</h1>
           <form className="form">
            <input type="email" id="email" name="email" placeholder="Email"/>
            <input type="password" name="password" autocomplete="current-password" required="Password" id="password" placeholder="password"/>
            <input type="button" value="login" id="login"/>
           </form>
           <div className="footer">
           <p className="text">Have not any account? <a href="/Signin" id="a">Create an Account </a> </p>
           </div>
        

                
        </section>
       
    )
}
