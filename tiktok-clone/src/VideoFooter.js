import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter({ channel, description, song }) {
    return (
        <div className="videoFooter">
            <div className="row">
            <div className="videoFoot_text">
                <h3>@{channel}</h3>
                <p>{ description }</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon" />
                     {/* smooth means that it will start showing the text again 
                     once it goes out of the screen */}
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{ song }</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter_record"
            src="https://images.squarespace-cdn.com/content/v1/59fc8e509f8dcebc07d262e1/1524177329876-YIBF6G8M5MWH0MM8RB0C/masterdisk-platinum-record-transparent.png"
            alt=""></img>
            </div>
        </div>
    )
}

export default VideoFooter
