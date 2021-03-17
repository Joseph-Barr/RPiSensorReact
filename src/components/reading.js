import {
    Component,
    React
} from 'react';

class Reading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature: 0,
            humidity: 0,
            timestamp: ""
        }
    }

    componentDidMount() {
        this.getLatestReading();
    }

    getLatestReading() {
        const reqUrl = `${process.env.REACT_APP_API_URL}/data/latest`;
        fetch(reqUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        temperature: result.temperature,
                        humidity: result.humidity,
                        timestamp: result.timestamp
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div>
                <h3> {`${new Date(this.state.timestamp).toDateString()}, ${new Date(this.state.timestamp).toLocaleTimeString()}`} </h3>
                <h1> {`Temperature: ${this.state.temperature}°C`} </h1>
                <h1> {`Humidity: ${this.state.humidity}%`} </h1>
            </div>
        );
    }
}

export default Reading;