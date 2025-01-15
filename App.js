import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  RTCRtpTransceiver,
  RTCRtpReceiver,
  RTCRtpSender,
  RTCErrorEvent,
  MediaStream,
  MediaStreamTrack,
  permissions,
  mediaDevices,
  registerGlobals,
} from "react-native-webrtc-web-shim";

export default function App() {
  registerGlobals();

  const getCameraCount = async () => {
    let cameraCount = 0;

    try {
      const devices = await mediaDevices.enumerateDevices();

      devices.map((device) => {
        if (device.kind != "videoinput") {
          return;
        }

        cameraCount = cameraCount + 1;
      });
    } catch (err) {
      // Handle Error
      console.log("Error in getCameraCount: ", err);
    }
  };

  getCameraCount();

  let mediaConstraints = {
    audio: true,
    video: {
      frameRate: 30,
      facingMode: "user",
    },
  };

  const getMedia = async () => {
    let localMediaStream;
    let isVoiceOnly = false;

    try {
      const mediaStream = await mediaDevices.getUserMedia(mediaConstraints);

      if (isVoiceOnly) {
        let videoTrack = await mediaStream.getVideoTracks()[0];
        videoTrack.enabled = false;
      }

      localMediaStream = mediaStream;
    } catch (err) {
      // Handle Error
    }
  };

  getMedia();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
