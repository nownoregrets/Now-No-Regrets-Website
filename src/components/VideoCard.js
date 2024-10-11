import React from 'react';

const VideoCard = (props) => {
    // Title Trim after 60 characters
    const title =
        props.title.length > 60
            ? props.title.substring(0, 60) + "..."
            : props.title;
    return (
        <div className="card col-sm-3 mt-3" style={{ width: "23rem" }}>

            <img src={props.thumbnail} style ={{borderRadius: ".5vw"}} className="card-img-top my-2" alt="Thumbnail" />

            <div className="card-body">

                <h5 className="card-title">{title}</h5>

                <div className="d-flex justify-content-evenly">

                    <a href={props.videoURL} className="btn btn-primary me-2" style={{ borderRadius: '0.5vw' }}>Watch Video</a>
                    <a href="https://www.youtube.com/@nownoregrets/" className="btn btn-secondary" style={{ borderRadius: '0.5vw' }}>View Channel</a>

                </div>
            </div>
        </div>
    );
}

export default VideoCard;
