const fs = require('fs')
const path = require('path')
const ffmpeg = require('fluent-ffmpeg')

const DEFAULT_VIDEO_FORMATS = ['avi', 'mov', 'mkv', 'flv', 'wmv', 'mpeg']

// convert videos to the target format
function convertVideo(inputFilePath, outputFilePath) {
    return new Promise((resolve, reject) => {
        ffmpeg(inputFilePath)
            .output(outputFilePath)
            .on('end', () => {
                console.log(`Converted: ${inputFilePath} -> ${outputFilePath}`)
                resolve()
            })
            .on('error', (err) => {
                console.error(`Error converting file ${inputFilePath}: `, err.message)
                reject(err)
            })
            .run()
    })
}

// check if a file is target video file or not
function isValidVideoFile(file) {
    const validExtensions = DEFAULT_VIDEO_FORMATS
    const ext = path.extname(file).substring(1).toLocaleLowerCase()
    return validExtensions.includes(ext)
}

// traverse folders and convert videos
async function travsrseAndConvert(directory = __dirname, inputFormats = DEFAULT_VIDEO_FORMATS, outputFormat = 'mp4') {
    const files = fs.readdirSync(directory)
    for (const file of files) {
        const fullPath = path.join(directory, file)
        const stat = fs.statSync(fullPath)

        if (stat.isDirectory()) {
            await travsrseAndConvert(fullPath, inputFormats, outputFormat)
        } else if (stat.isFile() && isValidVideoFile(file)) {
            const ext = path.extname(file).substring(1).toLocaleLowerCase()
            if (inputFormats.includes(ext)) {
                const outputFile = path.join(directory, `${path.basename(file, path.extname(file))}.${outputFormat}`)
                await convertVideo(fullPath, outputFile)
            }
        }
    }
}

// get inputs from command line arguments
const rootDirectory = process.argv[2]
const inputFormats = process.argv[3]
const outputFormat = process.argv[4]

// resolve the root directory path
const resolveRoot = path.resolve(rootDirectory)

// start the conversion process
travsrseAndConvert(resolveRoot, inputFormats, outputFormat)
.then(() => {
    console.log('All vonversions completed')
})
.catch((err) => {
    console.error(err)
})