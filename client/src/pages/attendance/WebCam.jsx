import React, { useEffect, useRef } from "react";
import '../../styles/WebCam.css';
const WebCam = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    startCamera();

    return () => {
      // Cleanup camera on unmount
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div class="face-portrait">
          <div class="portrait-glow"></div>
        <div class="face-frame">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="scan-grid"></div>
        <div class="scan-beam"></div>
        <div class="scan-ripple"></div>
        <div class="scan-points">
          <i style="left: 22%; top: 26%; animation-delay: 0s;"></i>
          <i style="left: 33%; top: 26%; animation-delay: 0.12s;"></i>
          <i style="left: 44%; top: 26%; animation-delay: 0.24s;"></i>
          <i style="left: 55%; top: 26%; animation-delay: 0.36s;"></i>
          <i style="left: 66%; top: 26%; animation-delay: 0.48s;"></i>
          <i style="left: 77%; top: 26%; animation-delay: 0.6s;"></i>
          <i style="left: 22%; top: 39%; animation-delay: 0.72s;"></i>
          <i style="left: 33%; top: 39%; animation-delay: 0.84s;"></i>
          <i style="left: 44%; top: 39%; animation-delay: 0.96s;"></i>
          <i style="left: 55%; top: 39%; animation-delay: 1.08s;"></i>
          <i style="left: 66%; top: 39%; animation-delay: 1.2s;"></i>
          <i style="left: 77%; top: 39%; animation-delay: 1.32s;"></i>
          <i style="left: 22%; top: 52%; animation-delay: 1.44s;"></i>
          <i style="left: 33%; top: 52%; animation-delay: 1.56s;"></i>
          <i style="left: 44%; top: 52%; animation-delay: 1.68s;"></i>
          <i style="left: 55%; top: 52%; animation-delay: 1.8s;"></i>
          <i style="left: 66%; top: 52%; animation-delay: 1.92s;"></i>
          <i style="left: 77%; top: 52%; animation-delay: 2.04s;"></i>
        </div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "100%", borderRadius: "10px" }}
      />
    </div>
  );
};

export default WebCam;