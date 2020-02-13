import React from 'react';
import './App.css';
import store from './store';
import TracksData from './TracksData';
import axios from 'axios';

class App extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        tracksData: []
    }
    componentDidMount() {
        console.log("helloworld");
        axios.get(`http://localhost:3000/all_tracks`)
        //axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
               this.setState({ tracksData: res.data });

                console.log(res);
                console.log(res.data);
            })

            // .then(res =>{
            //     console.log(res);
            //     return res.json();
            // })
            // .then((data) => {
            //     this.setState({ tracksData: data });
            //     console.log("hello world!!!!!");
            // })
            // .catch(console.log)
    }
    render(){
        return(
            <div>
            <div>
                    <TracksData tracksData={this.state.tracksData} />
            </div>
                <div>
                    <div>this is state:{store.getState()}</div>
                </div>
            </div>
        )
    }
}

export default App;