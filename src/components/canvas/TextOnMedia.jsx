import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const TextOnMedia = ({ imageUrl, videoUrl, text, width, height }) => {
  const canvasRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const mediaElementRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const mediaElement = imageUrl
      ? new Image()
      : document.createElement("video");

    mediaElement.src = imageUrl || videoUrl;
    mediaElementRef.current = mediaElement;

    const drawMedia = () => {
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(mediaElement, 0, 0, width, height);

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";

      const textWidth = ctx.measureText(text).width;
      const centerX = canvas.width / 2 - textWidth / 2;
      const centerY = canvas.height / 2;

      ctx.fillText(text, centerX, centerY);
    };

    mediaElement.onload = () => {
      drawMedia();
    };

    return () => {
      if (videoUrl) {
        mediaElement.pause();
        mediaElement.currentTime = 0;
      }
    };
  }, [imageUrl, videoUrl, text, width, height]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "image.png";
    link.click();
  };

  const handleUserInteraction = () => {
    if (videoUrl && !userInteracted) {
      const videoElement = mediaElementRef.current;
      videoElement.play().catch((error) => {
        console.error("Failed to play the video:", error);
      });
      setUserInteracted(true);
    }
  };

  return (
    <div onClick={handleUserInteraction}>
      <canvas
        ref={canvasRef}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

TextOnMedia.propTypes = {
  imageUrl: PropTypes.string,
  videoUrl: PropTypes.string,
  text: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default TextOnMedia;
