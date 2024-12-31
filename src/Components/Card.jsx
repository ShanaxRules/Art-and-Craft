
const Card = ({ data }) => {
    console.log(data);
    return (
        <div className="border-2 border-green-500 rounded-2xl hover:bg-gray-400">
            <div className="card bg-base-100 w-full shadow-xl p-5">
                <div>
                    <img
                        className="w-full lg:h-[450px] md:h-[400px] h-[350px]"
                        src={data.image}
                        alt="Shoes" />

                </div>


                <div className="card-body">
                    <h2 className="text-orange-600 text-2xl font-bold">{data.item_name}</h2>
                    <p className="text-blue-500 font-semibold text-xl ">{data.subcategory_Name}</p>
                    <div className="mt-4 flex items-center gap-x-2 mb-5">
                        <p className="text-green-600 bg-green-100 px-5 py-3 rounded-3xl">Price : {data.price}</p>
                        <p className="text-red-600 bg-red-100 px-5 py-3 rounded-3xl">Rating : {data.rating}</p>

                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;