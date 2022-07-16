import React from 'react';

class Welcome extends React.Component {

    handleClick = (e) => {
        console.log(e);
        //console.log('this is:', this);
    };

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return <h2 onClick={this.handleClick}>It is {this.props.name} {this.state.date.toLocaleTimeString()}.</h2>;
    }
}

function UserGreeting(props) {
    //state = {};
    return (
        <div className="card text-dark">
            <div className="card-header">
                Hello
            </div>

            <div className="card-body">
                Welcome back!
                <Welcome name="Gaurav" />
            </div>
        </div>
    );
};

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

/*
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
*/

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) { return <UserGreeting />; } return <GuestGreeting />;
}



export default Greeting; 