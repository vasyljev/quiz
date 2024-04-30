class MediaService {
  playMainTheme() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    const audioElement = document.querySelector('audio');
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    audioElement.play();
  }
}

const mediaService = new MediaService();
export default mediaService;
