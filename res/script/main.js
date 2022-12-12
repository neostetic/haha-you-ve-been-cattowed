let interval = 200

const onload = async (count) => {
    document.getElementById("img").src = "res/assets/frame_0.png"
    await sleep(interval)
    document.getElementById("img").src = "res/assets/frame_1.png"
    await sleep(interval)
    document.getElementById("img").src = "res/assets/frame_2.png"
    await sleep(interval)
    document.getElementById("img").src = "res/assets/frame_3.png"
    await sleep(interval)
    document.getElementById("counter").innerHTML = count
    await onload(count+1)
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}