import a1 from "../images/below/a1.jpeg"
import a2 from "../images/below/a2.jpeg"
import a3 from "../images/below/a3.jpeg"
import { Link } from "react-router-dom"

const BelowNav = ()=>{
    return(
        <>
        <div className="below-nav">
            
            <div className="below">
                <h1>Our Services</h1>
                <h3> We Assure one on one Assistance</h3>
                <div className="bel">
                    <div className="items">
                     <img src={a1} alt="" />
                     <div className="text">
                       <h1>
                        Lorem ipsum dolor
                       </h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugit, in sunt ut repellat aut corrupti voluptatem totam quia.</p>
                       <button>
                         <Link className="link">View More</Link>
                       </button>
                     </div>
                    </div>
                    <div className="items">
                        <img src={a2} alt="" />
                        <div className="text">
                       <h1>
                        Lorem ipsum dolor.
                       </h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugit, in sunt ut repellat aut corrupti voluptatem totam quia tenetur sed </p>
                       <button>
                         <Link className="link">View More</Link>
                       </button>
                     </div>
                        
                    </div>
                    <div className="items">
                        <img src={a3} alt="" />
                        <div className="text">
                       <h1>
                        Lorem ipsum dolor
                       </h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugit, in sunt ut repellat aut corrupti voluptatem tenetur sed.</p>
                       <button>
                         <Link className="link">View More</Link>
                       </button>
                     </div>
                        
                    </div>
                </div>

            </div>
        </div>
        
        </>
    )
}

export default BelowNav