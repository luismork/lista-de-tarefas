  const task__list = document.getElementById("task__list"); //ul
  const inputElement = document.getElementById("input"); //input de add tarefa
  const deleteElement = document.getElementById("deleteBt");// input bt de apagar toda lista
  const addElement = document.getElementById("addBt");//input de add elemento na lista

  let tasks = JSON.parse(localStorage.getItem("save")) || [];

  function mostrarTarefa() {
    task__list.innerHTML = "";

    for(const tarefa of tasks){
      const taskElement = document.createElement("li");
      const textElement = document.createTextNode(tarefa);

      const pos = tasks.indexOf(tarefa);
      const deleteItem = document.createElement("a");
      const textLink = document.createTextNode("X");

      deleteItem.appendChild(textLink);

      taskElement.appendChild(textElement);
      task__list.appendChild(taskElement);

      taskElement.appendChild(deleteItem);
      deleteItem.setAttribute("class","icone");
      deleteItem.setAttribute("onclick",`apagarFunc(${pos})`);
    }
  }

  mostrarTarefa();

  function createTask() {
    const inputValue = inputElement.value;

    if(inputValue == ""){
      alert("Digite algo...");
    } else {
      tasks.push(inputValue);

      inputElement.value = ""
      mostrarTarefa();
      save();
    }
  }

  function apagarFunc (pos) {
    tasks.splice(pos,1);
    mostrarTarefa();
    save();
  }

  function deleteAll() {
    tasks = [];
    task__list.innerHTML = "";
    localStorage.clear();

  }

  function save() {
    localStorage.setItem("save", JSON.stringify(tasks));
  }

  addEventListener('keypress',e=>{
    if(e.key=="Enter") createTask()
  })