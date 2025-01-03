import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import useDocumentTitle from "./useTitleChange";



const Register = () => {

    useDocumentTitle('Shan Art and Craft : Register');

    const { createUser, setUser, setLoading } = useContext(AuthContext);
    const [error , setError] = useState('');
    const [success , setSuccess] = useState('');

    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        setError('');
        setSuccess('');
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const url = e.target.photourl.value;

        createUser(email, password)
            .then(result => {
                setLoading(true);
                updateProfile(result.user, { displayName: name , photoURL:url })
                    .then(() => {
                        // Update the user state after the profile update succeeds
                        setUser({
                            ...result.user,
                            displayName: name, // Ensure displayName is included
                        });
                        const user = {email , name};
                        fetch('https://assignment-10-server-56gjnmyzb-sm-shah-nawaz-hossains-projects.vercel.app/user' , {
                            method:'POST',
                            headers: {
                                'content-type' : 'application/JSON'
                            },
                            body: JSON.stringify(user)
                            
                        }).then(res=>res.json()).then(data=>console.log(data));
                        e.target.reset();
                        navigate('/');
                        console.log("Registration successful, user profile updated.");
                        setSuccess("Account created successfully");


                    })
                    .catch(error => {
                        setError(error);
                    });
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => setLoading(false)); // Reset loading regardless of success or failure
    };



    //create user in firebase



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
                        Sign up now
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleRegister}>
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
                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="name"
                                    required
                                    autoComplete="name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="mt-2">
                        <label htmlFor="url" className="block text-sm/6 font-medium text-gray-900">
                                Photourl (optional)
                            </label>
                            <input
                                id="photourl"
                                name="photourl"
                                type="url"
                                
                                autoComplete="url"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                placeholder="Enter photo URL"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>

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
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Already an existing member?{' '}
                        <Link to={'/login'} className="font-semibold text-indigo-600 hover:text-indigo-500">Login now</Link>
                    </p>
                </div>
                {
                    error && <p className="text-red-500">{error}</p>
                }
                {
                    success && <p className="text-green-500">{success}</p>
                }
            </div>


        </div>
    );
};

export default Register;