import React from 'react'
import { Col, Row } from 'react-bootstrap';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function ImagesGroup(props) {

    const imagesGroup = props.ImagesGroup;

    let imagesGroupToRender = {}

    //CREATE GALLERY OR SLIDESHOW
    if (imagesGroup.value.type === 'gallery') {
        imagesGroupToRender = (
            imagesGroup.imagesgroup.images.map(img =>
                <div key={img.idImage} >
                    <img
                        className={imagesGroup.value.settings.extendClassesToImages ? imagesGroup.value.settings.customClasses : ""}
                        src={img.url}
                        style={imagesGroup.value.settings.inlineStyle ? JSON.parse(imagesGroup.value.settings.inlineStyle) : {}} />
                    <h3>{img.title}</h3>
                    <h6>{img.description}</h6>
                </div>
            )

        )
    }
    else {

        const properies = {
            duration: 5000,
            transitionDuration: 1000,
            infinite: true,
            indicators: true,
            arrows: true
        }

        imagesGroupToRender = (
            <div className="slideshow-div">
                <Slide>
                    {imagesGroup.imagesgroup.images.map(img =>
                        <div className="each-slide" key={img.idImage}>
                            <div>
                                <img
                                    className={imagesGroup.value.settings.extendClassesToImages ? imagesGroup.value.settings.customClasses : ""}
                                    src={img.url}
                                    style={imagesGroup.value.settings.inlineStyle ? JSON.parse(imagesGroup.value.settings.inlineStyle) : {}} />
                                <h3>{img.title}</h3>
                                <h6>{img.description}</h6>
                            </div>
                        </div>
                    )}
                </Slide>
            </div>
        )
    }

    return (
        <div>
            {imagesGroupToRender}
        </div>

    )
}
