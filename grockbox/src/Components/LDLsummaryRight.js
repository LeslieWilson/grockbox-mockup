import React, {Component} from 'react';
import LDLsummaryRightcomponent from './LDLsummaryRightcomponent';


const LDLsummaryRight = props => {

    let information = [
    {id:1, ldlDescrip: "MOST RECENT LDL", number:138, date: "03/18/2018", name:  "Rosuvastatin, 20mg"},
    {id:2, ldlDescrip: "STARTING LDL", number: "150(-17%)", name: "Losartin 10mg", date: "01/18/2018"},
    {id: 3, ldlDescrip: "HIGHEST LDL", number: 175, name: "No Medication", date: "03/15/2015"}
]

    let informationcomponent = information.map(data => {
        return(
            <LDLsummaryRightcomponent
            name = {data.name}
            date = {data.date}
            ldlDescrip = {data.ldlDescrip}
            number = {data.number}
            key = {data.id}
            />
        )
    })

    return(
    <div className = "entireRightSide">
    {informationcomponent}

    </div>
    )

}

export default LDLsummaryRight
