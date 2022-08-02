import React from 'react';
import auth from '../../Firebase/Firebase.init';
import { useAuthState, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
    
    const[user]=useAuthState(auth)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from, { replace: true });
    }
    return (
        <div className='text-center mt-3'>
            <h1> Login</h1>
            <button onClick={()=>signInWithGoogle()} type="button" className="btn btn-success">Google Login</button>
        </div>
    );
};

export default Login;