import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import PostCard from "./Post/PostCard";
import Footer from "./Footer/Footer";


const Blog = () => {
    return (
        <div className="w-[1400px] mx-auto mt-5">
            <Header></Header>
            <Banner></Banner>
            <PostCard></PostCard>
          <Outlet></Outlet> 
          <Footer></Footer>
        </div>
    );
};

export default Blog;