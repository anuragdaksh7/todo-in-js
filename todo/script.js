body = document.querySelector("body");
url = 'https://source.unsplash.com/'+String(window.innerWidth)+"x"+String(window.innerHeight)+'/?productive'
body.style.backgroundImage = "url("+url+")"


task = [

];

function render(){
  len = task.length;
  parent = document.getElementById("table");

  for (i = 0; i< len ; i++){
    newEle = document.createElement("p");
    newEle.id = "tasks";
    newEle.innerHTML = task[i];
    parent.appendChild(newEle);
  }
}

function rnder(mmm) {
  parent = document.getElementById("table");
  newEle = document.createElement("p");
  newEle.id = "tasks";
  newEle.innerHTML = mmm;
  parent.appendChild(newEle);
  alert("task added!");

}

function sub(){
  tsk = document.getElementById("inp");
  if (tsk.value != ""){
    task.push(tsk.value);
    rnder(tsk.value);
  }
}

render();
