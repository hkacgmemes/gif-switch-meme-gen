#!/bin/sh
ffmpeg -i 20x.gif -vf "fps=10,scale=300:-1:flags=lanczos,eq=contrast=0.5:brightness=0.25:saturation=0.75,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 20.gif