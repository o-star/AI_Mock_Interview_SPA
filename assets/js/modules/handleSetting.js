const handleSetting = () => {
  const recordScreen = document.getElementById('record-screen')
  const viewScreen = document.getElementById('view-screen')

  let recorder;
  let recordedChunks = [];

  document.querySelector("#record-button").addEventListener('click', () => {
    viewScreen.style.display = 'none'
    recordScreen.style.display = 'inline'
    recordScreen.style.animation = 'none'
    recordScreen.style.opacity = '1'

    recordedChunks = [];
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        recordScreen.srcObject = stream
        startRecording(recordScreen.captureStream())
      })
  })

  document.querySelector("#stop-button").addEventListener('click', () => {
    recordScreen.srcObject.getTracks().forEach(track => track.stop());
    //video stop

    recorder.stop()
    //record stop
  })

  document.querySelector("#play-button").addEventListener('click', () => {
    const recordedBlob = new Blob(recordedChunks, { type: "video/webm" })

    recordScreen.style.display = 'none'
    viewScreen.style.display = 'inline'
    viewScreen.style.animation = 'none'
    viewScreen.style.opacity = '1'

    viewScreen.src = URL.createObjectURL(recordedBlob);
    viewScreen.play()
  })

  const startRecording = (stream) => {
    recorder = new MediaRecorder(stream)
    recorder.ondataavailable = (e) => { recordedChunks.push(e.data) }
    recorder.start()
  }
}

export default handleSetting