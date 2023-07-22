import "./topbar.css"
import { Link } from "react-router-dom";


export default function TopBar() {
    const user = false;
    return(
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-github"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-solid fa-globe"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/">WRITE</Link></li>
                    <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/">LOGOUT</Link></li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                            <img className="topImg" src="https://avatarfiles.alphacoders.com/106/106816.gif" alt="" />
                        ) : (
                            <ul className="topList">
                                <li className="topListItem">
                                    <Link className ="link" to="/login"> LOGIN</Link>

                                    <Link className ="link" to="/register"> REGISTER</Link>

                                </li>


                            </ul>
                        
                        )
                }
               

                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}