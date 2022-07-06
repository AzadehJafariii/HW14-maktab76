
document.querySelector("button").onclick = (function addLi(){
        let li = document.createElement('li');
        const value = document.querySelector("input").value;
        li.innerHTML += `<li class="list-group-item bg-white border border-dark border-1 mb-2">${value}</li>`
        document.querySelector("ul").appendChild(li);

        document.querySelector("ul").addEventListener("click", function deleteLi(e){
                e.target.remove();
        })
})

