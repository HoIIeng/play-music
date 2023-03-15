namespace 音樂{
    //% block
    export function 演奏小星星(){
        music.play(music.stringPlayable("C C F F A A F - ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("F F E E D D C - ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G G F F E E D - ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G G F F E E D - ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C C G G A A G - ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("F F E E D D C - ", 120), music.PlaybackMode.UntilDone)
    }
}
