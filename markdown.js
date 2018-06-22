function onClickPreview(){
    let sourceText = document.getElementById("source").value
    let preview = document.getElementById("preview")
    preview.innerHTML = marked(sourceText)
}
