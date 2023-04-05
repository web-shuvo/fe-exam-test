import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mainSelector, getBlogPosts } from "../../Redux/slices/mainSlice";
import { Routes, Route } from "react-router-dom";
import BlogPosts from "../BlogPosts/BlogPosts";
import PostDetails from "../postDetails/PostDetails";
import { useState } from "react";


const Body = () => {
    let mainData = useSelector(mainSelector).postArr.slice(0, 10);
    let dispatch = useDispatch();
    let [data, setData] = useState([]);

    useEffect(() => {
        dispatch(
            getBlogPosts()
        )
    }, []);



    return (
        <div className="pb-[50px]">
            <Routes>
                <Route path="/" element={<BlogPosts data={mainData} />} />
                <Route path="/post/:id" element={<PostDetails />} />
            </Routes>

        </div>
    )
};

export default Body;