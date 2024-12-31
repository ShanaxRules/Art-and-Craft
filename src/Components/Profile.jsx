import { useContext } from "react";

import { AuthContext } from "./AuthProvider";
import { updateProfile } from "firebase/auth";
import useDocumentTitle from "./useTitleChange";



const Profile = () => {
    
    const { user } = useContext(AuthContext);
    console.log(user);
    useDocumentTitle('Your Profile');

    const handleDelete = async () => {
        if (!user || !user.email) {
            console.error("User email is not available");
            return;
        }
    
        const confirm = window.confirm("Are you sure you want to delete your account?");
        if (!confirm) return;
    
        try {
            const response = await fetch("https://assignment-10-server-mas7a87vu-sm-shah-nawaz-hossains-projects.vercel.app/delete-user", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: user.email }),
            });
    
            if (response.ok) {
                console.log("User deleted successfully from MongoDB");
                // Optionally log the user out or redirect them
            } else {
                console.error("Failed to delete user from MongoDB");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };
    

    const handleName = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
    
        if (!name) {
            console.log("Name cannot be empty");
            return;
        }
    
        try {
            // Update name in Firebase
            await updateProfile(user, { displayName: name });
            console.log("Name updated in Firebase to:", name);
    
            // Send updated name to backend
            const response = await fetch("https://assignment-10-server-mas7a87vu-sm-shah-nawaz-hossains-projects.vercel.app/update-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: user.email, 
                    name: name,
                }),
            });
    
            if (response.ok) {
                console.log("Name updated in MongoDB to:", name);
            } else {
                console.error("Failed to update name in MongoDB");
            }
        } catch (error) {
            console.error("Error updating name:", error);
        }
    };
    

    return (

        <div className="flex flex-col md:flex-col lg:flex-row gap-x-3 gap-y-3">
            <div className="h-[650px] flex justify-center flex-col items-center text-center gap-y-6 flex-1">
                <div className="w-[50px] h-[50px] rounded-full mb-4"><img src=""/><img className="rounded-full" src={user?.photoURL || "https://img.icons8.com/?size=100&id=7819&format=png&color=000000" } alt="" /></div>
                <h2 className="text-2xl text-black">Name : {user?.displayName || "No Name Set"}</h2>
                <h2 className="text-2xl text-black">Email : {user?.email || "No Email Set"}</h2>

                <div>
                    <h2 className="mb-4">Click here to change your name:</h2>
                    <div className="flex lg:flex-row md:flex-row flex-col">
                        <form onSubmit={handleName}>
                            <label htmlFor="name">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter here"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <input type="submit" value="Submit" className="btn btn-primary ml-2 mt-3" />
                        </form>
                        
                    </div>
                    <div className="block mt-4">
                            <button className="btn btn-danger bg-red-500 text-white" onClick={handleDelete}>Delete</button>
                        </div>
                </div>
            </div>

        </div>

    );
};

export default Profile;