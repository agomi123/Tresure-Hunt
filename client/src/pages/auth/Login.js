import Jumbotron from "../../components/cards/Jumbotron.js";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/auth.js";
import { useNavigate, useLocation } from "react-router-dom";
// import '../styles/Register.css';
import '../../styles/Register.css'
export default function Login() {
    // state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //hooks
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`/login`, {
                email, password,
            });
            if (data?.error) {
                toast.error(data.error);
            }
            else {
                // // save user and token to localstorage
                localStorage.setItem("auth", JSON.stringify(data));
                setAuth({ ...auth, token: data.token, user: data.user });

                console.log("auth", data.user.role)

                toast.success("Login successful.");

                if (data.user.role === 0)
                    navigate("/");

                if (data.user.role === 1)
                    navigate("/score/admin");
            }
        }
        catch (err) {
            console.log(err);
            toast.error("Login failed. Please try again.");
        }
    }
    return (
        <div>
            <form class="form" onSubmit={handleSubmit}>

                <h2>Sign In</h2>
                <input className='abcd' value={email} type="email" autoFocus placeholder="Your email" onChange={(e) => setEmail(e.target.value)}></input>
                <input className='abcd' value={password} type="password" placeholder="Your password" onChange={(e) => setPassword(e.target.value)}></input>
                {/* <a href="_" type="button" className='hn' >Sign in</a> */}
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
<label for="vehicle1">SignIn as Admin</label><br></br>
                <input type='submit' className='sumit'></input>
                <p>or sign In with</p>

                <div class="socials">
                    <img className='abc' src="https://i.pinimg.com/originals/b3/da/ac/b3daac6815ebf1516a545db6c3e40a36.jpg" alt=""></img>
                    <img className='abc' src="https://icones.pro/wp-content/uploads/2021/02/facebook-icone-orange.png" alt=""></img>
                    <img className='abc' src="https://i.pinimg.com/originals/ac/cf/1d/accf1d80314304e11e2bcf9537e13304.jpg" alt=""></img>

                </div>
            </form>

            {/* <Jumbotron title="Login" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                className="form-control mb-4 p-2"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                            />
                            <input
                                type="password"
                                className="form-control mb-4 p-2"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="btn btn-primary" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>
    )
}