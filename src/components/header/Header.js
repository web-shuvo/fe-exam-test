import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="flex justify-around px-10 py-4 shadow-md">
            <div className="max-w-[40%]">
                <Link to='/'>
                    <h2 className="text-[20px] font-semibold">Shuvo</h2>
                </Link>
            </div>
            <div className="max-w-[60%]">
                <p>Exam for front-end developer</p>
            </div>
        </nav>
    )
};


export default Header;