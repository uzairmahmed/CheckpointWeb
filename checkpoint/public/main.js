const path = require("path")
const fs = require("fs")


const dirPath = path.join(__dirname, "../cms")
const hostsPath = path.join(dirPath, "/hosts")
let postlist = []


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
                // console.log(contents)
                post = {
                    contents
                }
                postlist.push(post)
                ilist.push(i)
                if (ilist.length === files.length) {
                    const sortedList = postlist.sort ((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/cms/posts.json", data)
                }
            })
        })
    })
    return 
}

getHosts()