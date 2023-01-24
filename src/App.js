import { useState, useEffect } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import RacerDisplay from "./components/RacerDisplay";


function App(props){
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000},
    ]

    // Setting state variables (these variables will preserve their value across function calls i.e. new renders of component)
    const [count, setCount] = useState(0);
    const [myName, setMyName] = useState('');
    const [myCity, setMyCity] = useState('');
    const [racers, setRacers] = useState([]);
    const [season, setSeason] = useState("2022");
    const [round, setRound] = useState("5");

    // Function to handle the button click, that will change the count variable to whatever it currently is plus the step
    function handleClick(step){
        let newCount = count + step
        setCount(newCount)
    };

    // Function that will update myName and myCity variables with whatever strings are passed into it
    function updateUserInfo(username, usercity){
        setMyName(username);
        setMyCity(usercity);
    };

    // Function that will updated season and round with whatever numbers are passed into it
    function updateRacerStats(season, round){
        setSeason(season);
        setRound(round);
    };

    // Create an effect -> function to execute after every render
    useEffect(() => {
        console.log('useEffect effect callback has been called');
        fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                setRacers(racerStandings);
            })
    }, [season, round]); // Will only re-run if season or round change values

    return (
        <>
            <Navbar city={myCity} name={myName} updateUser={updateUserInfo} />
            <div className="container">
                <h1>Hello {myName}, Count: {count}</h1>
                {buttons.map((button, idx) => <Button color={button.color} step={button.step} key={idx} handleClick={handleClick} count={count}/>)}
                <RacerDisplay racers={racers} updateRacerStats={updateRacerStats} />
            </div>
        </>
        );
}

export default App;
