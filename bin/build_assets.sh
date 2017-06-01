#!/usr/bin/env bash

build_icon () {
  local icon=$1
  local width=$2
  local height=$3
  local resizeMode=$4

  $(npm bin)/svgexport assets/svg/$icon.svg assets/icons/$icon.png $width:$height $resizeMode & \
  $(npm bin)/svgexport assets/svg/$icon.svg assets/icons/$icon@2x.png $(($width * 2)):$(($height * 2)) $resizeMode & \
  $(npm bin)/svgexport assets/svg/$icon.svg assets/icons/$icon@3x.png $(($width * 3)):$(($height * 3)) $resizeMode & \
  wait
}

build_icon avatar 60 60 & \
wait 