import  { useState } from 'react';

const ButtonLike = (props) => {
   let [ like, setLike ] = useState(false);
    const onClick = () => {
        like = !like;
        setLike(like);
        console.log(like);
    }
    return (
        <button onClick={onClick} className="btn btn-primary"> {like == true ? 'Me gusta' : 'No me gusta'}  </button>
    );
}



export default ButtonLike;