import React from 'react'
import RacerForm from './RacerForm';
import RacerTable from './RacerTable';

export default function RacerDisplay(props) {
    return (
        <div>
            <h1 className="text-center my-3">F1 Racer Standings</h1>
            <RacerForm updateRacerStats={props.updateRacerStats} />
            <RacerTable racers={props.racers} />
        </div>
    )
}
