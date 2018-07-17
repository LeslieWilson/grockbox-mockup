import React, {Component} from 'react';
import LDLsummaryLeft from './LDLsummaryLeft';
import LDLsummaryRight from './LDLsummaryRight';

const LDLsummaryContainer = props => {
    return(
        <div>
        <LDLsummaryLeft />
        <LDLsummaryRight />
        </div>
    )
}

export default LDLsummaryContainer
