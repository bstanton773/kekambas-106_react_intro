import React, { Component } from 'react';
import RacerForm from './RacerForm';
import RacerTable from './RacerTable';

export default class RacerDisplayClass extends Component{
    constructor(props){
        console.log('Component Constructed')
        super(props); // Always call super(props) on the constructor
        this.state = {
            racers: [],
            season: "2022",
            round: "5"
        }
    }

    componentDidMount(){
        console.log('Component has mounted')
        fetch(`http://ergast.com/api/f1/${this.state.season}/${this.state.round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                this.setState({
                    racers:racerStandings
                });
            })
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Component has updated');
        if (prevState.round !== this.state.round || prevState.season !== this.state.season){
            fetch(`http://ergast.com/api/f1/${this.state.season}/${this.state.round}/driverStandings.json`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                    this.setState({
                        racers:racerStandings
                    });
                })
        }
    }

    
    updateRacerStats = (season, round) => {
        console.log(this);
        this.setState({season, round})
    };

    render(){
        console.log('Component Rendered');
        return (
            <div>
                <h1 className="text-center my-3">F1 Racer Standings</h1>
                <RacerForm updateRacerStats={this.updateRacerStats} />
                <RacerTable racers={this.state.racers} />
            </div>
        )
    }    
}
