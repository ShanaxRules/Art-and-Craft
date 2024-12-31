import { useContext } from "react";
import { AuthContext } from "./Components/AuthProvider";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Addcrafts = () => {
    const { user } = useContext(AuthContext);

    const stringID = user.email;

    //     image
    // item_name
    // subcategory_Name
    // short_description
    // price
    // rating
    // processing_time

    const handleSubmit = e => {
        const NIM_ID = stringID;
        const image = e.target.image.value;
        const item = e.target.item_name.value;
        const subcategory = e.target.subcategory_Name.value;
        const shortDescrip = e.target.short_description.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const time = e.target.processing_time.value;

        const user = { NIM_ID, image, item, subcategory, shortDescrip, price, rating, time };
        fetch('https://assignment-10-server-mas7a87vu-sm-shah-nawaz-hossains-projects.vercel.app/insertion', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        }).then(res => res.json()).then(data => console.log(data));
        e.target.reset();
    }





    return (
        <div>
            <h2 className="text-3xl text-green-500 mt-12 mb-12 text-center">Add your <span className="text-blue-500">creativity</span> now </h2>

            <div className="flex lg:flex-row md:flex-col flex-col gap-x-3 gap-y-3 justify-center items-center">
                <div className="flex-1">
                    <form onSubmit={handleSubmit} className="p-5 w-full border-2 border-green-500">
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
                        <button className="btn px-5 py-3 bg-green-500 text-white rounded-2xl mt-3" type="submit">Submit</button>







                    </form>

                </div>

                <div className="flex-1">

                    <DotLottieReact
                        src="https://lottie.host/017f1b2b-d376-4f71-b816-90b0d858cfe6/VsEN3YlV3z.lottie"
                        loop
                        autoplay
                    />
                </div>


            </div>




        </div>
    );
};

export default Addcrafts;