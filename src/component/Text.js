import React from 'react'

export default function Text(props) {

    const text = props.text



    const divStyle = {
        fontSize: text.value.settings.textSize,
        color: text.value.settings.textColor,
        textAlign: text.value.settings.textAlignment
    }


    return (
        <div >
            <p className={text.value.settings.inlineStyle} style={divStyle}>{text.value.content}</p>
        </div>
    )
}
