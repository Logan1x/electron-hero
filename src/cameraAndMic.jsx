import { useState, useRef, useEffect } from "react";

function CameraAndMic() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const videoChunksRef = useRef([]);
  const videoRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          if (event.data.type.startsWith("video/")) {
            videoChunksRef.current.push(event.data);
          } else {
            audioChunksRef.current.push(event.data);
          }
        }
      };

      mediaRecorderRef.current.onstop = () => {
        // Create audio blob
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        audioChunksRef.current = []; // Clear the chunks for the next recording

        // Create video blob
        const videoBlob = new Blob(videoChunksRef.current, {
          type: "video/webm",
        });
        const videoUrl = URL.createObjectURL(videoBlob);
        setVideoURL(videoUrl);
        videoChunksRef.current = []; // Clear the chunks for the next recording
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);

      // Set the video stream to the video element
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing media devices.", error);
      alert(
        "Could not access camera and microphone. Please check your permissions."
      );
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  useEffect(() => {
    // Cleanup function to stop the video stream when the component unmounts
    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.stream) {
        mediaRecorderRef.current.stream
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <h1>Audio and Video Recorder</h1>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      <video
        ref={videoRef}
        autoPlay
        muted
        style={{ width: "100%", marginTop: "10px" }}
      />
      {/* {audioURL && (
        <audio controls src={audioURL} style={{ marginTop: "10px" }}>
          Your browser does not support the audio element.
        </audio>
      )} */}
      {videoURL && (
        <video
          controls
          src={videoURL}
          style={{ marginTop: "10px", width: "100%" }}
        >
          Your browser does not support the video element.
        </video>
      )}
    </div>
  );
}

export default CameraAndMic;
