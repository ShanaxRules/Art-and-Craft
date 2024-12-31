import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Components/AuthProvider";
import { useNavigate } from "react-router-dom";
import Craftcard from "./Craftcard";

const MyItems = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-mas7a87vu-sm-shah-nawaz-hossains-projects.vercel.app/userposts')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const handleEdit = (answer) =>{
        navigate('/edititem', { state: { data: answer } });
    }

    const answers = items.filter(item=>item.NIM_ID==user.email);
    console.log(answers);
    return (
        <div>
            <h2>My items</h2>
            {
                answers.map(answer=><div className="mb-3  p-5" key={answer._id}>
                    <Craftcard post={answer}></Craftcard>
                    <button className="btn btn-primary" onClick={()=>handleEdit(answer)}>Edit</button>
                    </div>)

            }

            
        </div>
    );
};

export default MyItems;