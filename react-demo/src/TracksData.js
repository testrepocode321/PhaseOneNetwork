
import React from 'react'

const TracksData = ({ tracksData }) => {
    return (
        <div>{tracksData.map((trackdata) => (
                <div class="card">
                    {JSON.stringify(trackdata.id)}
                </div>
            ))}
        </div>
    )
};

export default TracksData