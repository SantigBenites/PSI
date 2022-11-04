let sum = 0;

function load(){

    [...document.querySelectorAll("[role='menu']>[role='menuitem']")].forEach(el => el.addEventListener('click',function (e) {
        document.querySelector("[id='selectedOption']").innerHTML = el.innerHTML
    }))

    document.querySelector("[id='addRow']").addEventListener('click',function (e) {
        let name = document.querySelector("[id='productName']").value;
        let cost = document.querySelector("[id='productCost']").value;

        var originNacional = document.querySelector("[id='origin'] > [id='o1']").checked;
        var originInternacional = document.querySelector("[id='origin'] > [id='o2']").checked;

        if (name == "" || cost == "" || (originInternacional == false && originNacional == false)){
            alert("Falta Informacao");
        }else{
            let option;
            if(originInternacional){ option = "Internacional"}else{ option = "Nacional"}

            var newEntry = document.createElement('tr');
            document.querySelector("tbody").appendChild(newEntry);
            newEntry.innerHTML = `
                <td>${name}</td>
                <td>${option}</td>
                <td>${cost}</td>`
            if(sum == null){
                sum = parseInt(cost);
            }else{
                sum = parseInt(sum) + parseInt(cost);
            }
        }
    })

    let newButton = document.createElement('button');
    newButton.setAttribute("type","button")
    newButton.setAttribute("id","costSum")
    newButton.innerHTML = "Total dos custos:";
    document.querySelector("[id='form1']").appendChild(newButton);
    document.querySelector("[id='costSum']").addEventListener('click',function (e){
    
        if(document.querySelector("[id='costLine']") != null){
            document.querySelector("[id='costLine']").remove()
        }
        var costEntry = document.createElement('th');
        costEntry.setAttribute("id","costLine")
        costEntry.setAttribute("colspan","3")
        document.querySelector("tbody").appendChild(costEntry);
        costEntry.innerHTML = `Total dos custos:${sum}` 
        costEntry.style.textAlign = "right";
        
    });

}