import PropTypes from "prop-types";
import React from "react";

const LoadVideo = ({ video, text }) => {

    const getImageVideo = () => video.thumbnails;

	return (
        <div className="flex flex-col items-center md:flex-row">
            <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 md:pr-8 md:items-start md:text-left md:mb-0">
                <p className={`w-full leading-relaxed text-textColor-500 px-2 md:px-5`}>
                    {text}
                </p>
            </div>
            <div className="relative w-5/6 mt-4 lg:max-w-lg lg:w-full md:w-1/2">
                <span className="play-video-button"></span>
                <div className="absolute z-10 w-full h-full bg-gray-700 rounded-lg opacity-0 cursor-pointer hover:opacity-50">
                </div>
                <picture className="relative">
                    <img loading="lazy" className="flex-shrink-0 object-cover object-center w-full rounded-lg" alt={video.title} src={getImageVideo()} />
                </picture>
            </div>
        </div>
	)
}

LoadVideo.propTypes = {
    video: PropTypes.object,
    openVideo: PropTypes.func
}

LoadVideo.defaultProps = {
	video: {}
}

export default LoadVideo;