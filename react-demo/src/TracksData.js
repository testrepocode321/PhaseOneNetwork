import React from 'react'
import store from './store'
import axios from 'axios';

const TracksData = ({ tracksData }) => {
    return (
        <div>{tracksData.map((trackdata) => (
                <div class="card">
                   <button onClick={()=>{

                       console.log(trackdata.id + '： button clicked');
                        axios.post('http://localhost:3000/track', {id: trackdata.id},  {
                            mode: 'no-cors',
                        }).then(res => {
                            console.log(res.data);
                            store.dispatch({type:"CHECK_TRACK",  payload:JSON.stringify(res.data)});
                        });
                   }}> {JSON.stringify(trackdata.id)}</button>
                </div>
            ))}
        </div>
    )
};

export default TracksData