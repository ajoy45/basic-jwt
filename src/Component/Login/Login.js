import React from 'react';
import auth from '../../Firebase/Firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);

    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        // console.log(user.email)
        const url='http://localhost:5000/login'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email:user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) =>{
                localStorage.setItem('access_token',data.token)
                navigate(from, { replace: true });
            });
       
    }
    return (
        <div className='text-center mt-3'>
            <h1> Login</h1>
            <button onClick={() => signInWithGoogle()} type="button" className="btn btn-success">Google Login</button>
        </div>
    );
};

export default Login;