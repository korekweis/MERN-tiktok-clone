import React, { useRef, useState } from 'react';
import "./Video.css";

function Video() {
    // use ref is for the video reference
    const videoRef = useRef(null);
    //this is used to check if the video is playing
    const [playing, setPlaying] = useState(false);

    const handleVideoPress = () => { 
        //if video is playing, stop it 
        if (playing) { 
            //current is the current vid that it is playing
            videoRef.current.pause();
            setPlaying(false);
        } else { 
            //else play
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video 
                className="video_player"
                onClick={ handleVideoPress }
                loop 
                ref={ videoRef }
                src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4">
            </video>
            {/* video footer */}
            {/* video sidebar */}
        </div>
    )
}

export default Video;
