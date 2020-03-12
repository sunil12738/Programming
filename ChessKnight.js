//https://www.techiedelight.com/chess-knight-problem-find-shortest-path-source-destination/
//point a to b move by knight solution
let cb = null//new Array(n).fill(new Array(n).fill(0))
let dist = null
let queue = []
function main(n, sr, sc, er, ec) {
    let init = new Array(n).fill(new Array(n).fill(0))
    cb = JSON.parse(JSON.stringify(init))
    dist = JSON.parse(JSON.stringify(init))
    queue.push({
        sr: sr,
        sc: sc
    })
    cb[sr][sc] = 1
    start(n)
    for (let i = 0; i < n; ++i) {
        console.log(dist[i])
    }
    for (let i = 0; i < n; ++i) {
        console.log(cb[i])
    }
    console.log("ans", dist[er][ec])
}

function getValid(sr, sc, n) {
    if (sr >= 0 && sr < n && sc >= 0 && sr < n) {
        return true
    }
    return false
}

function pushInQueue(sr, sc, n) {
    // console.log("outer", sr, sc, getValid(sr, sc, n))
    if (getValid(sr, sc, n) && getNotVisited(sr, sc)) {
        // if (queue.find(data => data.sr === sr && data.sc === sc)) {
        //     return false
        // } else {
        console.log("inner", sr, sc)
        queue.push({
            sr: sr,
            sc: sc,
        })
        return true
        // }
    }
    return false
}

function updateDist(sr, sc, sre, sce) {
    dist1 = dist[sr][sc]
    dist2 = dist[sre][sce]
    if (dist2 === 0) {
        dist[sre][sce] = dist1 + 1
    } else if (dist1 + 1 < dist2) {
        dist[sre][sce] = dist1 + 1
    }
}

function setVisited(sr, sc) {
    cb[sr][sc] = 1
}

function getNotVisited(sr, sc) {
    return cb[sr][sc] === 0
}

// sr + 2 sc + 1
// sr + 2 sc - 1
// sr - 2 sc + 1
// sr - 2 sc - 1
// sr + 1 sc + 2
// sr + 1 sc - 2
// sr - 1 sc + 2
// sr - 1 sc - 2

function start(n) {
    while (queue.length > 0) {
        const { sr, sc } = queue.shift()
        setVisited(sr, sc)
        if (pushInQueue(sr + 2, sc + 1, n)) {
            updateDist(sr, sc, sr + 2, sc + 1)
        }
        if (pushInQueue(sr + 2, sc - 1, n)) {
            updateDist(sr, sc, sr + 2, sc - 1)
        }
        if (pushInQueue(sr - 2, sc + 1, n)) {
            updateDist(sr, sc, sr - 2, sc + 1)
        }
        if (pushInQueue(sr - 2, sc - 1, n)) {
            updateDist(sr, sc, sr - 2, sc - 1)
        }
        if (pushInQueue(sr + 1, sc + 2, n)) {
            updateDist(sr, sc, sr + 1, sc + 2)
        }
        if (pushInQueue(sr + 1, sc - 2, n)) {
            updateDist(sr, sc, sr + 1, sc - 2)
        }
        if (pushInQueue(sr - 1, sc + 2, n)) {
            updateDist(sr, sc, sr - 1, sc + 2)
        }
        if (pushInQueue(sr - 1, sc - 2, n)) {
            updateDist(sr, sc, sr - 1, sc - 2)
        }
    }
}


main(9, 4, 4, 4, 5)
