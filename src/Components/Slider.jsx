import "../index.css";
const Slider = () => {
    function navigateCarousel(slideNumber) {
        const carousel = document.querySelector('.carousel');
        const targetSlide = document.getElementById(`slide${slideNumber}`);
        carousel.scrollTo({
            top: 0,
            left: targetSlide.offsetLeft,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/wCtdYQw/vlcsnap-2022-07-21-08h50m09s669-028e5f52-14ac-4843-877d-cc055790b006.webp"
                        className="w-full h-[650px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-end">
                        <div className="flex-1">
                            <a onClick={() => navigateCarousel(3)} className="btn btn-circle">❮</a>

                        </div>

                        <div className="">
                            <h1 className="text-red-500 lg:text-5xl md:text-4xl text-3xl text-left font-[Ysabeau SC] font-extrabold">Join in the color of <span className="text-green-700">Arts</span> and <span className="text-blue-700">Fun</span></h1>
                        </div>
                        <a onClick={() => navigateCarousel(2)} className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/ssTFpMm/Projects-White-paint-Franz-Marc.jpg"
                        className="w-full h-[650px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a onClick={() => navigateCarousel(1)} className="btn btn-circle">❮</a>
                        <div>
                            <h1 className="text-green-500 lg:text-5xl md:text-4xl text-3xl font-extrabold font-[Ysabeau SC]">Express your <span className="text-purple-800">creativity</span> with us</h1>
                        </div>

                        <a onClick={() => navigateCarousel(3)} className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/j8Rg44p/pexels-photo-1269968.jpg"
                        className="w-full h-[650px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-start items-center">
                        <a onClick={() => navigateCarousel(2)} className="btn btn-circle">❮</a>
                        <h1 className="text-pink-400 font-extrabold lg:text-5xl md:text-4xl text-3xl flex-1">World of <span className="text-yellow-600">paints</span> await here</h1>
                        <div>
                            <img src="https://i.ibb.co.com/bPJcSjs/file.png" alt="" />
                        </div>
                        <a onClick={() => navigateCarousel(1)} className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Slider;