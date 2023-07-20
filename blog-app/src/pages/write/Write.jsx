import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img 
        className="writeImg"
        src="https://images5.alphacoders.com/131/1318408.png" alt="" 
      />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className=" writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus = {true} />
            </div>
            <div className="writeFormGroup">
              <textarea placeholder="tell your story..." type ="text"className="writeInput">
                
              </textarea>
            </div>

            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
