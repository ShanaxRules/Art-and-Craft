import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "./Components/AuthProvider";

const EditItems = () => {
    const location = useLocation();
    const { data } = location.state || {};
    console.log(data);
    const { item='updated' , subcategory='updated' , shortDescrip='updated' , price=0 , rating=0 , time='updated' , _id='updated'} = data || {};
    const { user } = useContext(AuthContext);

    const handleEdit = e => {
        const _id = data._id;
        const NIM_ID = user.email;
        const image = e.target.image.value;
        const item = e.target.item_name.value;
        const subcategory = e.target.subcategory_Name.value;
        const shortDescrip = e.target.short_description.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const time = e.target.processing_time.value;

        const editedItem = { _id, NIM_ID, image, item, subcategory, shortDescrip, price, rating, time };

        fetch("https://assignment-10-server-mas7a87vu-sm-shah-nawaz-hossains-projects.vercel.app/updateitem", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedItem),
        })
            .then(response => response.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Item updated successfully!");
                    // Optionally, navigate or refresh
                } else {
                    alert("Failed to update item.");
                }
            })
            .catch(error => {
                console.error("Error updating item:", error);
                alert("There was an error updating the item.");
            });
    }
    return (
        <div>
            <h2 className="text-2xl font-bold">Edit the items</h2>
            <h2>Name of Item : {item || "Updated"}</h2>
            <h2> Name of Subcategory: {subcategory || "Updated"}</h2>
            <h2>Short Description : {shortDescrip || "Updated"}</h2>
            <h2>Price : {price || "Updated"}</h2>
            <h2>Rating : {rating || "Updated"}</h2>
            <h2>Preparation Time : {time || "Updated"}</h2>
            <h2> Unique ID : {_id || "Updated"}</h2>
            <form onSubmit={handleEdit}>
            <label className="block" htmlFor=""> Image
                            <input className="border-2 border-red-500 block w-full rounded-2xl p-1 mt-1" type="text" name="image" id="" />
                        </label>
                        <label htmlFor="" className="block"> Item name
                            <input className="border-2 border-red-500 block w-full rounded-2xl p-1 mt-1" type="text" name="item_name" id="" />
                        </label>
                        <label htmlFor="" className="block"> Subcategory name
                            <input className="border-2 border-red-500 block w-full rounded-2xl p-1 mt-1" type="text" name="subcategory_Name" id="" />

                        </label>
                        <label htmlFor="" className="block">Short Description
                            <input className="border-2 border-red-500 block w-full rounded-2xl p-1 mt-1" type="text" name="short_description" id="" />
                        </label>
                        <label htmlFor="" className="block">Price
                            <input className="border-2 border-red-500 block w-full rounded-2xl p-1 mt-1" type="number" name="price" id="" />
                        </label>
                        <label htmlFor="" className="block">Number
                            <input className="border-2 border-red-500 block w-full rounded-2xl p-1 mt-1" type="number" name="rating" id="" />

                        </label>

                        <label htmlFor="" className="block">Processing time
                            <input className="border-2 border-red-500 block w-full rounded-2xl p-1 mt-1" type="text" name="processing_time" id="" />


                        </label>
                       
                <button className="btn bg-red-500 px-5 py-2 rounded-xl text-white mt-3" type="submit">Edit</button>
            </form>


        </div>
    );
};

export default EditItems;