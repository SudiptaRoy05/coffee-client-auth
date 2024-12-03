import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider';

export default function LogIn() {
    const { signInUser } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.target)
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                // update last login time 
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;

                const loginInfo = {email, lastSignInTime}
                fetch(`http://localhost:5000/users`,{
                    method:"PATCH",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(loginInfo)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                })

            }).catch((error) => {
                console.log(error.message)
            })

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name='email'
                                    placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name='password'
                                    placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
