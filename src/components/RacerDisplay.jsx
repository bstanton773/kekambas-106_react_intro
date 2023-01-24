import React from 'react'

export default function RacerDisplay(props) {
    const tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor'];
    return (
        <div>
            <h1 className="text-center my-3">F1 Racer Standings</h1>
            <table className="table table-primary table-striped">
                <thead>
                    <tr>
                        {tableHeaders.map((headerName, i) => <th key={i}>{headerName}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.racers.map( racer => (
                        <tr key={racer.position}>
                            <th>{racer.position}</th>
                            <th>{racer.Driver.givenName}</th>
                            <th>{racer.Driver.familyName}</th>
                            <th>{racer.points}</th>
                            <th>{racer.wins}</th>
                            <th>{racer.Driver.nationality}</th>
                            <th>{racer.Constructors[0].name}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
