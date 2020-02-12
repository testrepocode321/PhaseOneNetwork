import React from 'react';
import './App.css';
import store from './store';
import TracksData from './TracksData';


class App extends React.Component{
    constructor(props){
        super(props)
        this.fn=this.fn.bind(this)
    }
    state = {
        tracksData: [],
        number: 100
    }
    componentDidMount() {
        fetch('http://localhost:3000/all_tracks')
        //fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ tracksData: data })
                console.log("hello world!!!!!")
            })
            .catch(console.log)
    }
    render(){
        return(
            <div>
            <div>
                <div>{store.getState()}</div>
            </div>
            <div>
                    <TracksData tracksData={this.state.tracksData} />
            </div>
            </div>
        )
    }
    fn(){
    }
}

export default App;