import React from 'react'

export default function RacerDisplay(props) {
    const tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor'];

    const handleRacerChange = e => {
        e.preventDefault();
        let season = e.target.season.value;
        let round = e.target.round.value;
        props.updateRacerStats(season, round);
        e.target.season.value = '';
        e.target.round.value = ''
    }

    return (
        <div>
            <h1 className="text-center my-3">F1 Racer Standings</h1>

            <form action="" className="row my-3" onSubmit={handleRacerChange}>
                <div className="col-12 col-md-5">
                    <input type="text" name="season" placeholder="Enter Year" className='form-control'/>
                </div>
                <div className="col-12 col-md-5">
                    <input type="text" name="round" placeholder="Enter Round" className='form-control' />
                </div>
                <div className="col">
                    <input type="submit" className="btn btn-success w-100" value="Search" />
                </div>
            </form>

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
