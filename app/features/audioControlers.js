import { Audio } from "expo-av"
export const play = async (audioObj, setSoundObj) => {
    const playbackObj = new Audio.Sound()
    const status = await playbackObj.loadAsync(audioObj.url, {shouldPlay: true})
    setSoundObj({playbackObj, status})
}