import { useState } from "react"
import { Link } from "react-router-dom";

export const Landing = () => {

    const [name,setName] = useState();

    return <div>
        <input type="text"  onChange={(e) => {
                setName(e.target.value)
                }}/>

                <Link to={{ pathname: "/room", search: `?name=${name}` }} >Join</Link>
    </div>
}