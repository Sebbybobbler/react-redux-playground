import { useSelector, useDispatch } from "react-redux";
import { selectDadJoke, getDadJoke } from "./dadjokesslice";
import { useEffect } from "react";


export default function DadJokes() {
    const dadJoke = useSelector(selectDadJoke);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDadJoke());
    }, [dispatch]);
    function handleClick(){
        dispatch(getDadJoke());
    }
    console.log(dadJoke);
    return (
        <>
            <p>{dadJoke}</p>
            <button onClick={handleClick}>Click me for a new joke!</button>
        </>
    );
}