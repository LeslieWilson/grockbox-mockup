import React, {Component} from 'react';
import LDLsummaryLeft from './LDLsummaryLeft';
import LDLsummaryRight from './LDLsummaryRight';

const LDLsummaryContainer = props => {
    return(
        <div className= "entireThing">
            <LDLsummaryLeft />
            <LDLsummaryRight />
        </div>
    )
}

export default LDLsummaryContainer
