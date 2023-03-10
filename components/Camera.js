import '../styles/camera.css';

export const Camera = () => {
  return `
    <div class="container">
      <video class="input_video"></video>
      <div class="canvas-container">
      <canvas class="output_canvas" width="640px" height="480px">
      </canvas>
      </div>
      <div class="loading">
        <div class="spinner"></div>
        <div class="message">
          Loading
        </div>
      </div>
      <a class="abs logo" href="http://www.mediapipe.dev" target="_blank">
        <div style="display: flex;align-items: center;bottom: 0;right: 10px;">
          <img class="logo" src="logo_white.png" alt="" style="
            height: 50px;">
          <span class="title">MediaPipe</span>
        </div>
      </a>
      <div class="shoutout">
        <div>
          <a href="https://solutions.mediapipe.dev/face_mesh">
            Click here for more info
          </a>
        </div>
      </div>
    </div>
    <div class="control-panel">
    </div>
  `;
};
