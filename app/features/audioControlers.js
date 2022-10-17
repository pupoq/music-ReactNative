import { Audio } from "expo-av"
export const play = async (audioObj, setSoundObj, onUpdate) => {
    const playbackObj = new Audio.Sound()
    const status = await playbackObj.loadAsync(audioObj.url, {shouldPlay: true, progressUpdateIntervalMillis: 1000})
    setSoundObj({playbackObj, status})
    playbackObj.setOnPlaybackStatusUpdate(onUpdate)
}

