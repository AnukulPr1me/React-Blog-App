import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg" 
                src="https://cdn.animenewsnetwork.com/thumbnails/max600x600/cms/news.6/200315/mahouka_visual.jpg" alt="" 
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet consectetur.
                <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit"></i>
                  <i className=" singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
              <span className="singlePostAuthor">Author: <b>Anukul Prime</b></span>
              <span className="singlePostTime">1 hour ago</span>
            </div>

            <p className = "singlePostDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, 
              beatae explicabo! Sapiente facilis ducimus odit labore, 
              sunt harum ea minus quo quisquam atque reiciendis aperiam, 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, 
              beatae explicabo! Sapiente facilis ducimus odit labore, 
              sunt harum ea minus quo quisquam atque reiciendis aperiam, 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, 
              beatae explicabo! Sapiente facilis ducimus odit labore, 
              sunt harum ea minus quo quisquam atque reiciendis aperiam, 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, 
              beatae explicabo! Sapiente facilis ducimus odit labore, 
              sunt harum ea minus quo quisquam atque reiciendis aperiam, 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, 
              beatae explicabo! Sapiente facilis ducimus odit labore, 
              sunt harum ea minus quo quisquam atque reiciendis aperiam, 
              
            </p>
        </div>

    </div>
  )
}
