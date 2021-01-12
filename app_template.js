document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('form').onsubmit = function(){
        const newRow = document.createElement('tr')
        let row = document.createElement("span")
        row = document.querySelector("#input-row").value
        let col = document.createElement("span")
        col = document.querySelector("#input-col").value
        let id = document.createElement('span')
        id = document.querySelector("#input-number").value
        delBtn.innerHTML = 'button-compute'
        delBtn.onclick = function(){
            newRow.append("61063110"+id)
        }
        if(row%2==1){
            
        }
    }
}