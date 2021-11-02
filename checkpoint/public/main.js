const path = require("path")
const fs = require("fs")


const dirPath = path.join(__dirname, "../cms")
const hostsPath = path.join(dirPath, "/hosts")
const podcastsPath = path.join(dirPath, "/podcasts")
let hostlist = []
let podlist = []


const getHosts = () => {
    fs.readdir(hostsPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        let ilist = []
        files.forEach((file, i) => {
            console.log(file)
            let obj = {}
            let post
            fs.readFile(`${hostsPath}/${file}`, "utf8", (err, contents) => {
                hostlist.push(JSON.parse(contents))
                ilist.push(i)
                if (ilist.length === files.length) {
                    hostlist.sort((a, b) => { return a.order - b.order })
                    let data = JSON.stringify(hostlist)
                    fs.writeFileSync("src/cms/hosts.json", data)
                }
            })
        })
    })
    return
}

const getPodcasts = () => {
    fs.readdir(podcastsPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        let ilist = []
        files.forEach((file, i) => {
            console.log(file)
            let obj = {}
            let post
            fs.readFile(`${podcastsPath}/${file}`, "utf8", (err, contents) => {
                podlist.push(JSON.parse(contents))
                ilist.push(i)
                if (ilist.length === files.length) {
                    const sortedList = podlist.sort((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/cms/podcasts.json", data)
                }
            })
        })
    })
    return
}

getHosts()
getPodcasts()