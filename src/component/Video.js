import React from 'react'

export default function Video(props) {

    const v = props.video

    return (
        <div>
            <video
                poster={v.value.urlPoster}
                controls={v.value.behaviours.showControls}
                loop={v.value.behaviours.loopVideo}
                muted={v.value.behaviours.muteVideo}
                preload={v.value.behaviours.lazyLoadVideo.toString()}
                autoPlay={v.value.behaviours.autoplay}
            >
                <source src={v.value.urlMp4} type="video/mp4" />
            </video>
        </div>
    )
}
