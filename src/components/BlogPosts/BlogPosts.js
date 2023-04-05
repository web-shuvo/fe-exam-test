import PostTitle from "../postTitle/PostTitle";


const BlogPosts = ({ data }) => {

    console.log(data);
    return (
        <>
            <header className="text-center text-[50px] font-semibold">Blog posts</header>
            <main className="mt-[40px] grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 px-1 md:px-[80px]">
                {data.map((post) => (
                    <PostTitle key={post.id} data={post} />
                ))}
            </main>
        </>
    )
};

export default BlogPosts;