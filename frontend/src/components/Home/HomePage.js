import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { useState } from "react";
import "./HomePage.scss";
import { useSelector } from "react-redux";
function HomePage(params) {
  const [isMuted, setIsMuted] = useState(true);
  // const isAuthenticated=useSelector(state=>state.user.isAuthenticated)
  // const account=useSelector(state=>state.user.account)
  return (
    <div className="homepage-container">
      <ReactPlayer
        playing={true}
        url="https://vimeo.com/114031364"
        width="100%"
        height="100%"
        muted={isMuted}
        volume={1}
        className="video"
        loop={true}
      />
      {isMuted ? (
        <VscMute
          className="btn-volume"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      ) : (
        <VscUnmute
          className="btn-volume"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      )}
    </div>
  );
}
export default HomePage;
