
import Header from "../../header/Header"
import Post from "../../post/Post";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";

import "./home.css"

export default function Home() {
  return (

    <>
        <Header/>

        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>

    </>

  );
}
