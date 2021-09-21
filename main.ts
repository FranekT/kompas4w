let stopnie = 0
basic.forever(function () {
    stopnie = input.compassHeading()
    if (stopnie > 315 || stopnie <= 45) {
        basic.showString("N ")
        basic.showNumber(stopnie)
        if (stopnie == 0) {
            music.playTone(988, music.beat(BeatFraction.Whole))
        }
    }
    if (stopnie > 45 && stopnie <= 135) {
        basic.showString("E ")
        basic.showNumber(stopnie)
        if (stopnie == 90) {
            music.playTone(494, music.beat(BeatFraction.Whole))
        }
    }
    if (stopnie > 135 && stopnie <= 225) {
        basic.showString("S ")
        basic.showNumber(stopnie)
        if (stopnie == 180) {
            music.playTone(247, music.beat(BeatFraction.Whole))
        }
    }
    if (stopnie > 225 && stopnie <= 315) {
        basic.showString("W ")
        basic.showNumber(stopnie)
        if (stopnie == 270) {
            music.playTone(349, music.beat(BeatFraction.Whole))
        }
    }
})
