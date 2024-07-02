import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="items-center lg:text-base lg:px-20 flex gap-4 font-semibold mx-4 mobile:text-sm">
            <Link to="/" className="text-white py-2 hover:text-red-500">Home</Link>
            <Link to="/plays" className="text-white py-2 hover:text-red-500">Plays</Link>
            <Link to="/categories" className="text-white py-2 hover:text-red-500">Categories</Link>
            <Link to="/tvshow" className="text-white py-2 hover:text-red-500">TVShows</Link>
        </div>
    )
}

export default Menu;