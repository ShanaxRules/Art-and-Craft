import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import useDocumentTitle from "./useTitleChange";






const Login = () => {
    useDocumentTitle('Shan Art and Craft : Login');

    const {signInUser , signInWithGoogle} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email , password)
        .then(result=>{
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch(error=>console.log(error));
    }

    const handleSignInGoogle = () =>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
            navigate('/');
        })
        .catch(error=>console.log(error));
    }






    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="ShanEstate"
                        src="/art-and-craft-creative-object-design-vector.jpg"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-12 flex justify-between items-center lg:flex-row md:flex-row flex-col gap-y-3">
                        <div>
                        <button onClick={handleSignInGoogle} className="btn btn-ghost px-5 py-2 border-[1px] border-gray-600 rounded-xl bg-white"><FaGoogle /> Sign in with Google</button>
                        </div>

                        <div>
                        <button className="btn btn-ghost px-5 py-2 border-[1px] border-gray-600 rounded-xl bg-white"><FaGithub />
                         Sign in with Github</button>
                        </div>
                    </div>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?{' '}
                        <Link to={'/register'} className="font-semibold text-indigo-600 hover:text-indigo-500">Register now</Link>
                    </p>
                </div>
            </div>
            {/* <ParticlesBg type="square" bg={true} /> */}
        </div>
    );
};

export default Login;