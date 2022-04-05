const viewdrop = ()=>{
    const buttons = document.querySelectorAll(".drop-btn");

    buttons.forEach((btn)=>{
        btn.addEventListener("click", (event)=>{
        const content = event.path[2].children[1]
        
        content.classList.toggle("active")
        if(content.classList.contains("active")){
            content.style.display = "block";
        }else{
            content.style.display = "none";

        }
        })
    })
}

viewdrop();