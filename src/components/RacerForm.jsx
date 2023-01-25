import React from 'react'

export default function RacerForm(props) {

    const handleRacerChange = e => {
        e.preventDefault();
        let season = e.target.season.value;
        let round = e.target.round.value;
        props.updateRacerStats(season, round);
        e.target.season.value = '';
        e.target.round.value = ''
    }

    return (
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
    );
}
