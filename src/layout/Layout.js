import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';


//IMPORT COMPONENT
import Html from '../component/Html';
import ImagesGroup from '../component/ImagesGroup';
import Menu from '../component/Menu';
import Text from '../component/Text';
import Video from '../component/Video';


export default function Lg(props) {

    const lg = props.lg;
    let rowKey = 0;


    //CREATE COLUMNS
    function createColumn(columns, row) {
        let cl = []

        let colKey = 0;

        for (let i = 0; i < columns.length; i++) {
            const flex = columns[i];
            if (row.elements[i]) {
                switch (row.elements[i].key) {
                    case 'imagesgroup':
                        cl.push(<Col key={colKey++} lg={flex} md={flex} sm={flex} xs={flex} className={row.customColumnsClasses}>
                            <ImagesGroup ImagesGroup={row.elements[i]} />
                        </Col>);
                        break;
                    case 'menu':
                        cl.push(<Col key={colKey++} lg={flex} md={flex} sm={flex} xs={flex} className={row.customColumnsClasses}>
                            <Menu menu={row.elements[i]} />
                        </Col>)
                        break;
                    case 'html':
                        cl.push(<Col key={colKey++} lg={flex} md={flex} sm={flex} xs={flex} className={row.customColumnsClasses}>
                            <Html html={row.elements[i]} />
                        </Col>)
                        break;
                    case 'text':
                        cl.push(<Col key={colKey++} lg={flex} md={flex} sm={flex} xs={flex} className={row.customColumnsClasses}>
                            <Text text={row.elements[i]} />
                        </Col>)
                        break;
                    case 'video':
                        cl.push(<Col key={colKey++} lg={flex} md={flex} sm={flex} xs={flex} className={row.customColumnsClasses}>
                            <Video video={row.elements[i]} />
                        </Col>)
                        break;
                    default:
                        break;
                }
            }
            else {
                cl.push(<Col lg={flex} md={flex} sm={flex} xs={flex} key={colKey++}></Col>)
            }
        }

        return cl;
    }


    //CREATE ROW
    const rowToRender = lg.map(row =>
        <Row key={rowKey++} className={row.customRowClasses}  >
            {createColumn(row.responsiveCode.split('-'), row)}
        </Row>
    )

    return (
        <div>
            {rowToRender}
        </div>
    )
}
