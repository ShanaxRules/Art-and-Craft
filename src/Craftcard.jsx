
const Craftcard = ({ post }) => {
    console.log(post);
    return (
        <div className="mb-3 border-2 border-red-500">
            <div className="card lg:card-side bg-base-100 shadow-xl gap-x-2 flex">
                <figure>
                    <img className="w-[350px] h-[350px]"
                        src= { post.image || "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"}
                        alt="Album" />
                </figure>
                <div className="flex flex-col gap-y-6 ml-2 p-3">
                    <h2 className="card-title">{post.item}</h2>
                    <p>Posted by : {post.NIM_ID}</p>
                    <p>Subcategory : {post.subcategory}</p>
                    <div className="flex flex-row gap-x-2 items-center">
                        <p className="text-green-500 bg-green-50 px-5 py-3 rounded-3xl font-bold">Price : {post.price} taka</p>
                        <p className="text-red-500 bg-red-50 px-5 py-3 rounded-3xl font-bold">Rating : {post.rating} scale</p>

                    </div>

                    <p className="text-blue-500 bg-blue-50 px-5 py-3 rounded-3xl font-bold">Preparation Time : {post.time} mins</p>
                    <p>Description : {post.shortDescrip}</p>

                </div>
            </div>



        </div>
    );
};

export default Craftcard;