let resultPlace = $("#result2")
function tellStory() {
    let width = $("#width").val()
    let height = $("#height").val()
    let color = $("#number").val()
    let kb = ((width * height) * 3) / 1024
$(`<p>File is ${kb}KB which is OK </p>`).appendTo("#result2")}