import React from 'react'
import Row from '../component/Row';

export default function Lg(props) {

    const lg = props.lg;

    function createColumn(columns) {
        let cl = []

        for (let i = 0; i < columns[0]; i++)
            cl.push(<p key={i}>{i}</p>)

        // console.log(cl)
        return cl;
    }




   const rowToRender = lg.map(row =>  createColumn(row.responsiveCode.split('-')) )

    return (
        <div>
            {rowToRender}
        </div>
    )
}
