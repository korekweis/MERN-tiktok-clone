import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="App">
      <div className="app_videos">
        <Video video_url="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
          channel="BTS_twt" 
          description="jungkook took this" 
          song="butter" 
          likes={100} 
          messages={96} 
          shares={12}
        />
        <Video video_url="https://assets.mixkit.co/videos/preview/mixkit-woman-running-above-the-camera-on-a-running-track-32807-large.mp4"
          channel="kelseyRun" 
          description="daily sprints" 
          song="WAP - Cardi B" 
          likes={207} 
          messages={103} 
          shares={22}
        />
      </div>
      {/* app container */}
        {/* videos */}
    </div>
  );
}

export default App;
