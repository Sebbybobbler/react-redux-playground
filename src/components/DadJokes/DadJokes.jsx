import { useSelector, useDispatch } from "react-redux";
import { selectDadJoke, getDadJoke } from "./dadjokesslice";
import { useEffect } from "react";
import styles from "./DadJokes.module.css";

export default function DadJokes() {
    const dadJoke = useSelector(selectDadJoke);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDadJoke());
    }, [dispatch]);

    function handleClick(){
        dispatch(getDadJoke());
    }
    if(!dadJoke){
        return(
            <div className={styles.dadJokeWrapper}>
                <p>Loading...</p>
            </div>
        )
    }
    if(dadJoke.error){
        return(
            <div className={styles.dadJokeWrapper}>
                <p>Loading...</p>
            </div>
        )
    }
    return (
        <>  <div className={styles.dadJokeWrapper}>
             <p>{dadJoke}</p>
            <button onClick={handleClick}>Click me for a new joke!</button>
            </div>
        </>
    );
}