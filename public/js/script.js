const viewdrop = ()=>{
    const buttons = document.querySelectorAll(".drop-btn");

    buttons.forEach((btn)=>{
        btn.addEventListener("click", (event)=>{
        const content = event.path[2].children[1]
        console.log(content)
        })
    })
}

viewdrop();