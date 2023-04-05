import { useNavigate } from "react-router-dom";

const PostTitle = ({ data }) => {
    let navigate = useNavigate();
    let postBody;
    if (data.body.length === 100) {
        postBody = data.body;
    } else {
        postBody = (
            <>
                {data.body.slice(0, 100)}
                <br />
                <p className="mt-[10px]">Read more</p>
            </>
        )
    }

    return (
        <div
            className="border border-solid border-gray-400 p-4 rounded-[10px] space-y-2 cursor-pointer"
            onClick={() => { navigate(`/post/${data.id}`) }}>
            <h2 className="text-[20px] leading-[25px] font-medium text-black">{data.title}</h2>
            <h3 className="text-gray-400">Author: {data.userId}</h3>
            <h4 className="text-gray-600">
                {postBody}
            </h4>
        </div>
    )
};

export default PostTitle;