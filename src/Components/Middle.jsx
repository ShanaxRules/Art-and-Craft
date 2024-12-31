import { Typewriter } from "react-simple-typewriter";

const Middle = () => {
    return (
        <div>
            <h2 className="lg:text-4xl md:text-3xl text-3xl font-bold text-orange-600 text-center"> Get ready to  {' '}<span className="text-red-700"><Typewriter
                    words={['Share', 'Post', 'Create', 'Repeat!']}
                    loop={false}
                    cursor
                    cursorStyle='_'
                    cursorBlinking={true}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    
                /></span> 
                

            </h2>
            {/* Style will be inherited from the parent element */}
            <div className="mt-6 flex justify-center items-center">
                <img src="https://i.ibb.co.com/VBsw4zT/artist-brush.jpg" alt="" />
            </div>



        </div>
    );
};

export default Middle;