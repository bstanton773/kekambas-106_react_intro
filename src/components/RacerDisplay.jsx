import React, { useState, useEffect } from 'react';
import RacerForm from './RacerForm';
import RacerTable from './RacerTable';

export default function RacerDisplay(props) {

    const [racers, setRacers] = useState([]);
    const [season, setSeason] = useState("2022");
    const [round, setRound] = useState("5");

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
        <div>
            <h1 className="text-center my-3">F1 Racer Standings</h1>
            <RacerForm updateRacerStats={updateRacerStats} />
            <RacerTable racers={racers} />
        </div>
    )
}
