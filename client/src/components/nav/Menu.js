
import { NavLink , Link} from "react-router-dom"
import { useAuth } from "../../context/auth"
import { useNavigate } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../../styles/footer.css'
export default function Menu(){
    // hooks
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const logout = () => {
        setAuth({...auth, token: null, user: null});
        localStorage.removeItem("auth");
        navigate("/login");
    }
   
    return (
        <Navbar className="nav nav-tabs d-flex justify-content-between shadow-sm" sticky="top" bg="light" expand = "md">
         <Container fluid>
          
         <Navbar.Brand style={{color: "black"}}  to="/">Treasure Hunt</Navbar.Brand>

        {!auth?.user ?  <Nav
            className="me-auto my-2 my-lg-0 nav-item "
            style={{ maxHeight: '70px' }}
           
          >

            <Link className='mx-3 '  style={{color: "black" , textDecoration:"none"}} to="/">DashBoard</Link>
            <Link style={{color: "black" , textDecoration:"none",cursor:"pointer"}} to="/about">About</Link>


          </Nav> : <Nav className="nav-item ">
          
            <Link style={{color: "black" , textDecoration:"none", margin: "15px"}} to="/about">About</Link>
            <Link  style={{color: "black" , textDecoration:"none", margin: "15px"}} to="/score/admin"> LeaderBoard </Link>
            <Link style={{color: "black" , textDecoration:"none", margin: "15px"}} to="/score/user">Score Card</Link>
            <a href="https://agomi123.github.io/AGOMI-INDIA.github.io/" target="_blank" style={{color: "black" , textDecoration:"none",marginTop:"15px"}}>Connect With Us</a>
            </Nav>}

          {!auth?.user ? (
                    <div className="nav-item ">
                        <Button variant="outline-light" className="mx-2" >
                        <NavLink className="nav-link" to="/login">
                                SignIn
                            </NavLink>
                        </Button>
                        <Button variant="outline-light" className="mx-2" >
                        <NavLink className="nav-link" to="/register">
                                SignUp
                            </NavLink>
                        </Button>
                    </div>

                      
                ): (
                    <div className="dropdown d-flex flex-column nav-item "> 
                        <>
                            <a style={{color: "white" , margin: "5px"}} >
                                { auth?.user?.username?.toUpperCase() }
                            </a>
                           
                        </>
                                {/* <NavLink className="nav-link pointer" 
                                    to={`/dashboard/${auth?.user?.role===1 ? "admin" : "user"}`}>
                                    Dashboard
                                </NavLink> */}
                            

                                    {/* <a style={{color: "white"}}  onClick={logout} >
                                        Logout
                                    </a>  */}
                                    <Button variant="dark" className="mx-2" onClick={logout} >
                                        SignOut
                                    </Button>
                           
                     
                    </div>
                )}


            </Container>   

        </Navbar>
    );
    
}