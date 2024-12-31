import { useEffect, useState } from "react";
import useDocumentTitle from "./useTitleChange";
import Slider from "./Slider";
import Middle from "./Middle";
import Card from "./Card";
import Marquee from "react-fast-marquee";
import Review from "./Review";
import { NavLink } from "react-router-dom";
import Accordion from "./Accordion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const Home = () => {
    useDocumentTitle('Shan Art and Craft : Home');

    const [datas, setDatas] = useState([]);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://assignment-10-server-mas7a87vu-sm-shah-nawaz-hossains-projects.vercel.app/cards')
            .then(res => res.json())
            .then(data => setDatas(data));
    }, [])
    useEffect(() => {
        fetch('/ReviewData.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);


    return (
        <div>
            <div className="mb-6 mt-3">
                <Slider></Slider>
            </div>
            <div className="mt-16">
                <Middle></Middle>

            </div>

            <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-3">
                {
                    datas.map(data => <Card data={data} key={data._id}></Card>)
                }


            </div>

            <div className="mt-20 flex justify-center items-center">
                <h2 className="lg:text-3xl md:text-2xl text-2xl text-orange-600">Check out our reviews</h2>
            </div>

            <div className="mt-20">
                <Marquee autoFill={true} speed={100} gradient={true}>
                    {
                        reviews.map(reviewer => <Review key={reviewer.id} reviewer={reviewer}></Review>)
                    }

                </Marquee>
            </div>

            <div className="mt-20 flex justify-center items-center">
                <h2 className="lg:text-3xl md:text-2xl text-2xl text-green-600 font-extrabold">From Nothing to Everything</h2>
            </div>

            <div className="mt-12 mb-20">
                <div className="diff aspect-[16/9] lg:w-[1/2] md:w-full w-full h-[500px]">
                    <div className="diff-item-1">
                        <img className="" alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
                    </div>
                    <div className="diff-item-2">
                        <img
                            alt="daisy"
                            src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
                    </div>
                    <div className="diff-resizer"></div>
                </div>

                <div
                    className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat mt-24"
                    style={{ backgroundImage: "url('https://i.ibb.co/wQJRf87/art-studio-interior-artist-workshop-with-stuff-free-vector.jpg')" }}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>


                    {/* Optional content */}

                </div>

                <div className="flex justify-center relative">
                    <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col w-3/4 border-2 border-red-500 absolute -top-[550px]  bg-white p-5">
                        <div className="flex-1">
                            <img className="w-full lg:h-[450px] md:h-[400px] h-[350px]" src="https://i.ibb.co.com/mC94nN2/abstract-human-face-ink-painting-by-ariesoerja-dfntkpf-fullview.jpg" alt="" />

                        </div>
                        <div className="flex-1 bg-white text-center flex flex-col gap-y-4 items-center justify-center">
                            <h1 className="lg:text-4xl md:text-3xl text-2xl text-black font-extrabold bg-white">Check out all the posts of users</h1>
                            <button className="btn bg-gray-800 rounded-2xl text-white text-xl px-5 py-2 mt-4 w-[150px]"><NavLink to={'/allcrafts'}>All posts</NavLink></button>
                        </div>
                    </div>
                </div>



            </div>

            <div className="mt-20 flex lg:flex-row md:flex-col flex-col gap-x-3 gap-y-2 justify-center items-center">
                <div className="flex-1">
                    <DotLottieReact
                        src="https://lottie.host/8924e735-efdd-4697-a046-81e7bc3f4f3e/mPcnOL8hh8.lottie"
                        loop
                        autoplay
                    />

                </div>

                <div className="flex-1">
                    <Accordion></Accordion>
                </div>



            </div>

        </div>
    );
};

export default Home;