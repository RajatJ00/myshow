import React from "react";
import { Link } from "react-router-dom";
import Menu from "../DropDown/menu.component";

function Footer() {
    return (
        <>
            <div className="bg-navCol-700 flex mt-10 py-4 items-center justify-center">
                <p className="w-1/2 text-cyan-100">© Created by Rajat</p>
                <Menu />
            </div>
        </>
    )
}
export default Footer;