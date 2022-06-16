import React, { useState, useEffect, useContext } from 'react'
import { Link , useNavigate} from 'react-router-dom'
// import { FirebaseContext } from '../Firebase'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import img from '../images/logok.png'
import img2 from '../images/logob.png'

const Login = (props) => {

    // const firebase = useContext(FirebaseContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])

    const handleSubmit = e => {
        e.preventDefault();

        // firebase.loginUser(email, password)
        // .then(user => {
        //     setEmail('');
        //     setPassword('');
        //     props.history.push('/welcome');
        // })
        // .catch(error => {
        //     setError(error);
        //     setEmail('');
        //     setPassword('');
        // })
        
    }
    
    return (
<section style={{backgroundColor: '#9A616D' }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block bg-dark py-auto">
              <img src={img}
                alt="login form" className="img-fluid my-auto" style={{borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                    <span className="h1 fw-bold mb-0">
                        <img src={img2}
                alt="login form" className="img-fluid my-auto" style={{borderRadius: "1rem 0 0 1rem", width:'150px'}} /></span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Se connecter</h5>

                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" value='' autoComplete='off' />
                    <label className="form-label" htmlFor="form2Example17">Nom d'utilisateur</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" value='' autoComplete='off'/>
                    <label className="form-label" htmlFor="form2Example27">Mot de passe</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <Link className="btn btn-dark btn-lg btn-block" to="/home">Login</Link>
                  </div>

                  {/* <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}> Don't have an account? <a href="#!"
                      style={{color: "#393f81"}}>Register here</a></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a> */}
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Login
