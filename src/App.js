import Navbar from "./components/Navbar";

function App(props){
    let myName = 'Brian'
    return (
        <>
            <Navbar city="Chicago" test={123} name={myName} />
            <div className="container">
                <h1>Hello {myName} {10 * 5}</h1>
            </div>
        </>
        );
}

export default App;
