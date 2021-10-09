import React, {useState} from 'react'
import "./VideoSideBar.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

// props/parameters = likes, shares, messages, passed in Video.js
function VideoSideBar({ likes, shares, messages }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSideBar">
            <div className="videoSideBar_button">
                {/* if liked, favorite Icon and not Favorite Border Icon*/}
                {liked ? ( 
                    <FavoriteIcon fontSize="large"
                    onClick={(e) => setLiked(false)} />
                ) : (
                    <FavoriteBorderIcon fontSize="large" 
                    onClick={(e) => setLiked(true)}
                    />
                )}
                {/* this is from the parameter being passed */}
                <p>{liked ? likes+1 : likes}</p>
                {/* <p>{liked ? (101) : (100)}</p> */}
            </div>
            <div className="videoSideBar_button">
                <MessageIcon fontSize="large"/>
                <p>{ messages }</p>
            </div>
            <div className="videoSideBar_button">
                <ShareIcon fontSize="large"/>
                <p>{ shares }</p>
            </div>
        </div>
    )
}

export default VideoSideBar
