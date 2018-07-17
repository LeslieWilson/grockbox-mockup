import React, {Component} from 'react';
import LDLsummaryLeft from './Component/LDLsummaryLeft';
import LDLsummaryRight from './Component/LDLsummaryRight';

const LDLsummaryContainer = props => {
    return(
        <div>
        <LDLsummaryLeft />
        <LDLsummaryRight />
        </div>
    )
}

export default LDLsummaryContainer
