import React from 'react';
import auth from '../../Firebase/Firebase.init';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    return (
        <div className='text-center mt-3'>
            <h1> Login</h1>
            <button onClick={()=>signInWithGoogle()} type="button" className="btn btn-success">Google Login</button>
        </div>
    );
};

export default Login;