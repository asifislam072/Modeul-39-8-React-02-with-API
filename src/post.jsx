export default function Post({pos}){
   const {title,body,id} = pos
   const css = {
    border:'2px solid red',
    margin:'40px'
   }
    return (
        <div style={css}>
            <h2>UserId : {id}</h2>
            <p>Title : {title}</p>
            <p>{body}</p>
            <button style={{backgroundColor:"green",color:'red'}}>Learn mor</button>
        </div>
    )
}
