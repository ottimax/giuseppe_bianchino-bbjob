import React from 'react'

export default function Html(props) {

    const html = props.html

    return (
        <div dangerouslySetInnerHTML = {{__html: html.value.content}} />
    )
}
