import { useEffect, useMemo, useState } from "react"
import Post from "./post"
// import post from "./post"

export default function Posts(){
    const [usepost,setusedpost] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setusedpost(data))
    },[])
    return (
        <div>
            <h3>Posts {usepost.length}</h3>
            {
                usepost.map(pro => <Post pos={pro}></Post>)
            }
        </div>
    )
}