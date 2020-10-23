import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ImagesGroup from '../component/ImagesGroup';


export default function Lg(props) {

    const lg = props.lg;


    let rowKey = 0;


    function createColumn(columns, row) {
        let cl = []

        for (let i = 0; i < columns.length; i++) {
            if (row.elements[i]) {
                switch (row.elements[i].key) {
                    case 'imagesgroup':
                        cl.push(<Col key={row.elements[i].value.idGallery}>
                            <ImagesGroup  ImagesGroup={row.elements[i]} />
                        </Col>);
                        break;
                    default:
                        break;
                }
            }
        }

        console.log(cl)
        return cl;
    }




    const rowToRender = lg.map(row =>
            <Row key={rowKey++} className={`row ${row.customRowClasses} ${row.customColumnsClasses}`} >
                {createColumn(row.responsiveCode.split('-'), row)}
            </Row>
    )

    return (
        <div>
            {rowToRender}
        </div>
    )
}
