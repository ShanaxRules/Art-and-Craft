import { useEffect, useState } from "react";
import Craftcard from "./Craftcard";

const Allcrafts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://assignment-10-server-mas7a87vu-sm-shah-nawaz-hossains-projects.vercel.app/userposts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((data) => setPosts(data))
    .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1 className="lg:text-4xl md:text-3xl text-2xl text-green-500 mb-12 font-extrabold text-center mt-12">
        All crafts
      </h1>
      {posts.map((post) => (
        <Craftcard post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Allcrafts;

