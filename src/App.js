import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App(props){
    let myName = 'Brian'
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000},
    ]
    return (
        <>
            <Navbar city="Chicago" test={123} name={myName} />
            <div className="container">
                <h1>Hello {myName} {10 * 5}</h1>
                {buttons.map((button, idx) => <Button color={button.color} step={button.step} key={idx}/>)}
            </div>
        </>
        );
}

export default App;
