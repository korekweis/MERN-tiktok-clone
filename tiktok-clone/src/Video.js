import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

function Video({ video_url, channel, description, song, likes, messages, shares }) {
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
                src={ video_url }>
            </video>
            {/* video footer */}
            <VideoFooter channel={ channel } description={ description }
                song={ song } />
            {/* video sidebar */}
            <VideoSideBar likes={ likes } messages={ messages } shares={ shares }/>
        </div>
    )
}

export default Video;
