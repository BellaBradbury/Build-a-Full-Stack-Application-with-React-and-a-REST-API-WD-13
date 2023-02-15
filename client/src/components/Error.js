import React from 'react';

export default function Error(props) {
    const {error} =  props.location.state;

    return (
        <div className='wrap'>
            <h2>Error</h2>
            <p>{error}</p>
        </div>
    );
}