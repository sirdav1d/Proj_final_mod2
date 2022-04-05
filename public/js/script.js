const viewdrop = ()=>{
    const buttons = document.querySelectorAll(".drop-btn");

    buttons.forEach((btn)=>{
        btn.addEventListener("click", (event)=>{

        
        console.log(event);
        })
    })
}

viewdrop();