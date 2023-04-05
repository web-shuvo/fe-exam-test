import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mainSelector, postDetails, deletePost } from "../../Redux/slices/mainSlice";
import editIcon from '../../assets/images/pen-to-square-solid.svg';
import deleteIcon from '../../assets/images/trash-solid.svg';
import { useNavigate } from "react-router-dom";


const PostDetails = () => {
    let { id } = useParams();
    let navigate = useNavigate()

    let mainData = useSelector(mainSelector).postDetails;
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            postDetails(id)
        )
    }, []);


    return (
        <>
            {mainData.id ?
                <article className="md:w-[60%] mt-[70px] mx-auto border border-solid border-gray-400 rounded-[10px] p-[20px] space-y-4">

                    <ul className="flex justify-end space-x-4">
                        <li>
                            <img src={editIcon} alt="edit" className='w-[20px] cursor-pointer' />
                        </li>
                        <li>
                            <img src={deleteIcon} alt="delete" className='w-[17px] cursor-pointer'
                                onClick={() => {
                                    dispatch(deletePost(id)).then((res) => {
                                        if (res.type === "mainSlice/deletePost/fulfilled") {
                                            navigate('/')
                                        }
                                    })
                                }} />
                        </li>
                    </ul>

                    <header className="text-[20px] text-black font-semibold">{mainData.title}</header>
                    <p className="text-stone-500">Author: {mainData.userId}</p>
                    <main className="text-zinc-700">{mainData.body}</main>
                </article> : <h2 className="text-[30px] text-center mt-[50px]">Loading...</h2>
            }
        </>
    )
};

export default PostDetails;