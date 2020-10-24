import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Menu(props) {

    const menu = props.menu



    function createMenu(item) {
        if (item.subMenu)
            return (
                <div className="dropdown">
                    <button className="dropdown-button" key={item.name}>{item.name}</button>
                    <div className="dropdown-content">
                    {item.subMenu.map(sub => 
                        <a key={sub.id} href={sub.link}><p>{sub.name}</p></a>
                        )}
                    </div>
                </div>
            )
        else {
            return (
                <a href={item.link}><button className="menu-button">{item.name}</button></a>
            )
        }
    }


    const itemsToRender = menu.value.menu.items.map(item =>
        <Col key={item.id}>
            {createMenu(item)}
        </Col>
    )




    return (
        <Row className={menu.value.settings.customClasses} style={menu.value.settings.inlineStyle ? menu.value.settings.inlineStyle : {}}>
            {itemsToRender}
        </Row>
    )
}
