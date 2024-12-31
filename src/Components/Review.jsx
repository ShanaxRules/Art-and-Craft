
import ReactStars from 'react-rating-stars-component';


const Review = ({ reviewer }) => {

    const { image, name, designation, rating, review } = reviewer;
    return (
        <div className='w-[300px] h-[600px] mr-7'>
            <div className="card bg-base-100 w-full shadow-xl p-5 rounded-xl border-2 border-red-500 flex justify-center items-center gap-y-2 flex-col h-[600px]">

                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={image} />
                    </div>
                </div>


                <div className='flex justify-center items-center gap-y-3 flex-col'>
                    <h2 className="card-title">{name}</h2>
                    <p className="text-lg text-gray-600">{designation}</p>
                    <ReactStars
                        count={rating}
                        size={24}
                        color="orange"
                    />


                    <p className="text-gray-700 w-1/2 text-center">{review}</p>

                </div>
            </div>

        </div>
    );
};

export default Review;