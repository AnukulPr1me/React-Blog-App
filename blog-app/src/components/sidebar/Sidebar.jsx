import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://avatarfiles.alphacoders.com/315/315638.png" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Ut commodi doloremque sed molestiae dignissimos? Fugiat esse, 
                dolore explicabo perspiciatis nemo atque doloribus facilis expedita provident.
            </p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItems">Anime</li>
                <li className="sidebarListItems">Games</li>
                <li className="sidebarListItems">E-Sports</li>
                <li className="sidebarListItems">Tech</li>
                <li className="sidebarListItems">Sports</li>
                <li className="sidebarListItems">Entertainment</li>
                <li className="sidebarListItems">Politics</li>
                <li className="sidebarListItems">Fashion</li>
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-github"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
                <i className="sidebarIcon fa-solid fa-globe"></i>

            </div>
        </div>
    </div>
  );
}
