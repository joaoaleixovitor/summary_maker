// =-=-=-=-= | Buttons
const buttonAddSummary = document.querySelector("#addSummary");
const buttonRenameSummary = document.querySelector("#buttonRename");
const buttonDeleteSummary = document.querySelector("#buttonDelete");

// =-=-=-=-= | Elements
const summariesList = document.querySelector("#summariesList");

// =-=-=-=-= | Events
buttonAddSummary.addEventListener("click", ()=>{
    const summaryName = document.createElement("input");
    summaryName.setAttribute("type", "text");
    summaryName.setAttribute("id", "summaryName");
    summariesList.appendChild(summaryName);
    summaryName.focus();
    
    summaryName.addEventListener("focusout", ()=>{
        if (summaryName.value) {
            const newSummary = document.createElement("li");
            newSummary.setAttribute("id", `summary${[...summariesList.children].length+1}`);
            newSummary.setAttribute("class", "summary");
            newSummary.innerText = summaryName.value;
            summariesList.appendChild(newSummary);
        }
        summaryName.remove();
    });
});

buttonRenameSummary.addEventListener("click", ()=>{    
    const selectedElements = document.querySelectorAll(".selected");
    if (selectedElements.length >= 1) {
        for (i of [...selectedElements]) {
            const summaryName = document.createElement("input");
            summaryName.setAttribute("type", "text");
            summaryName.setAttribute("id", "summaryName");
            summaryName.value = i.innerText;
            i.innerText = "";
            i.appendChild(summaryName);
            summaryName.focus();
            
            summaryName.addEventListener("focusout", ()=>{
                i.innerText = summaryName.value;
                summaryName.remove();
            });
        }
    }
});

buttonDeleteSummary.addEventListener("click", ()=>{  
    const selectedElements = document.querySelectorAll(".selected");
    if (selectedElements.length >= 1) {
        for (i of [...selectedElements]) {
            i.remove()
        }
    }
});

summariesList.addEventListener("click", (element)=>{
    const selectedElements = document.querySelectorAll(".selected");
    if (selectedElements.length >= 1) {
        for (i of [...selectedElements]) {
            if (element.target == i) {
                i.classList.toggle("selected");
            } else {
                i.classList.toggle("selected");
                element.target.classList.toggle("selected");
            }
        }
    } else {
        element.target.classList.toggle("selected");
    }
});
