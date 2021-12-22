let model = [];


 
document.getElementById("complimentButton").onclick = function () {
    // console.log('jajjsajsa')
    axios.get("http://localhost:4000/api/compliment/")
    .then(function (response) {
        const data = response.data;
        alert(data);
    });
};

document.getElementById("fortunebutton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
    .then(function (response) {
        const data = response.data;
        alert(data);
    })
}

// const listContainer = document.getElementById('list-container')

const displayList = arrOfObjs => {
    let listDiv = document.getElementById('listcontainer');
    listDiv.innerHTML = '';
    const newList = document.createElement('ul');
    listDiv.appendChild(newList);
    
    for (let i = 0; i < arrOfObjs.length; i++) {
        listItem = document.createElement('li');
        listItem.id = arrOfObjs[i].id;
        listItem.appendChild(document.createTextNode(arrOfObjs[i].motivationString));
        newList.appendChild(listItem);

        deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', `${arrOfObjs[i].id}`);
        deleteButton.textContent = "X";
        listItem.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleteMotivation);
    }
}

const getMotivation = event => {
    axios.get("http://localhost:4000/api/motivation/")
    .then(function (response) {
        displayList(response.data)
        
    })
}
//   const addMotivation = (motivationObj) => {
    //       let newMotivationContainer = document.createElement('div')
    //       let deleteButton = document.createElement('')
    //  
    const motivationButton = document.getElementById('motivationButton') 
    
    
    
    
    const createMotivation = event => {
        event.preventDefault()
        const newMotivation = document.getElementById('addMotivation').value;
        axios.post("http://localhost:4000/api/motivationList", {
            motivateString: newMotivation
        })
        .then(function (response){
            displayList(response.data)
            document.getElementById('addMotivation').value = "";
        })
    }     
        motivationButton.addEventListener('click', getMotivation)
        const deleteMotivation = event => {
            event.preventDefault()
            const id = event.target.id

            axios.delete("http://localhost:4000/api/motivationList")
            .then(function(response){
                displayList(response.data)


            })
        }
        
        const addQuote = document.getElementById('submitButton')
        addQuote.addEventListener('click', createMotivation)
        // axios.get("http://localhost:4000/api/motivation/")
        // .then(function (response) {
            //     document.getElementById('addMotivation')
            
            //     })
            // }
            
    