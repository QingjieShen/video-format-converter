# Video Format Converter

## Introduction
I'm currently learning French, and my friend sent me some videos recorded while teaching students French. Unfortunately, all the videos are in `.avi` format, which my laptop's video player doesn't support. To solve this issue, I created this project to convert all `.avi` videos (and other common video formats) into `.mp4` format (or othe formats you like), making them easily playable on any device.

It can recursively traverses a specified directory, finds video files, and converts them using **FFmpeg**, skipping non-video files to avoid errors. It's a handy tool for anyone needing to convert video formats quickly and efficiently.

## Features

- Recursively searches through a specified directory for video files.
- Converts video files to `.mp4` format by default.
- Skips non-video files, preventing errors during conversion.
- Supports multiple input video formats, including `.avi`, `.mov`, `.mkv`, `.flv`, `.wmv`, `.mpeg`, and more.

## Requirements

- **Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
- **FFmpeg**: You must have [FFmpeg](https://ffmpeg.org/download.html) installed and accessible in your system's PATH.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/QingjieShen/video-format-converter.git
   ```
2. Install the dependencies:
   ```bash
   npm install fluent-ffmpeg
   ```
3. Ensure [FFmpeg](https://www.ffmpeg.org/) is installed on your machine and accessible from the command line

## Useage

1. Open a terminal and navigate to the project directory.
2. Run the script with your target directory, original video format, and target video format as arguments. If no directory is provided, it will default to the current working directory.
  ```bash
  node video-converter.js /path/to/your/videos originalFormat targetFormat
  ```
3. For example, to convert all .avi videos to .mp4 in a specified directory:
  ```bash
  node video-converter.js "/Volumes/Hard Drive - 990/Francais" avi mp4
  ```
4. The script will start processing the videos, converting them to the specified format, and outputting them in the same directory as the original files.
