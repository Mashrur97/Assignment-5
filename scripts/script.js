document.getElementById("btn1")
.addEventListener("click",function(){
    const task = parseInt(document.getElementById("task").innerHTML);
    const done = parseInt(document.getElementById("done").innerHTML);
    const btn = document.getElementById("btn1");
    
    btn.disabled = true;
          alert("Board updated successfully"); 
          if(task==1){
            alert("Congratulations!!! You've completed all the tasks");
         }

          document.getElementById("task").innerHTML = (task - 1);
          document.getElementById("done").innerHTML = (done + 1);

          const child = document.createElement("div");
          const formattedDate = new Date().toLocaleString();

          child.innerHTML = `
          You have completed the task - ${document.getElementById("title").innerText} at ${formattedDate}
          `;

          const parent = document.getElementById("container");
          child.classList.add("activity")
          parent.appendChild(child);

    
})


document.getElementById("b2")
.addEventListener("click",function(){
    const task = parseInt(document.getElementById("task").innerHTML);
    const done = parseInt(document.getElementById("done").innerHTML);
    const btn = document.getElementById("b2");
    
    btn.disabled = true;
          alert("Board updated successfully"); 
          if(task==1){
            alert("Congratulations!!! You've completed all the tasks");
         }

          document.getElementById("task").innerHTML = (task - 1);
          document.getElementById("done").innerHTML = (done + 1);

          const child = document.createElement("div");
          const formattedDate = new Date().toLocaleString();

          child.innerHTML = `
          You have completed the task - ${document.getElementById("t2").innerText} at ${formattedDate}
          `;

          const parent = document.getElementById("container");
          child.classList.add("activity")
          parent.appendChild(child);

    
})
document.getElementById("b3")
.addEventListener("click",function(){
    const task = parseInt(document.getElementById("task").innerHTML);
    const done = parseInt(document.getElementById("done").innerHTML);
    const btn = document.getElementById("b3");
    
    btn.disabled = true;
          alert("Board updated successfully"); 
          if(task==1){
            alert("Congratulations!!! You've completed all the tasks");
         }

          document.getElementById("task").innerHTML = (task - 1);
          document.getElementById("done").innerHTML = (done + 1);

          const child = document.createElement("div");
          const formattedDate = new Date().toLocaleString();

          child.innerHTML = `
          You have completed the task - ${document.getElementById("t3").innerText} at ${formattedDate}
          `;

          const parent = document.getElementById("container");
          child.classList.add("activity")
          parent.appendChild(child);

    
})
document.getElementById("b4")
.addEventListener("click",function(){
    const task = parseInt(document.getElementById("task").innerHTML);
    const done = parseInt(document.getElementById("done").innerHTML);
    const btn = document.getElementById("b4");
    
    btn.disabled = true;
          alert("Board updated successfully"); 
          if(task==1){
            alert("Congratulations!!! You've completed all the tasks");
         }

          document.getElementById("task").innerHTML = (task - 1);
          document.getElementById("done").innerHTML = (done + 1);

          const child = document.createElement("div");
          const formattedDate = new Date().toLocaleString();

          child.innerHTML = `
          You have completed the task - ${document.getElementById("t4").innerText} at ${formattedDate}
          `;

          const parent = document.getElementById("container");
          child.classList.add("activity")
          parent.appendChild(child);

    
})
document.getElementById("b5")
.addEventListener("click",function(){
    const task = parseInt(document.getElementById("task").innerHTML);
    const done = parseInt(document.getElementById("done").innerHTML);
    const btn = document.getElementById("b5");
    
    btn.disabled = true;
          alert("Board updated successfully"); 
          if(task==1){
            alert("Congratulations!!! You've completed all the tasks");
         }

          document.getElementById("task").innerHTML = (task - 1);
          document.getElementById("done").innerHTML = (done + 1);

          const child = document.createElement("div");
          const formattedDate = new Date().toLocaleString();

          child.innerHTML = `
          You have completed the task - ${document.getElementById("t5").innerText} at ${formattedDate}
          `;

          const parent = document.getElementById("container");
          child.classList.add("activity")
          parent.appendChild(child);

    
})
document.getElementById("b6")
.addEventListener("click",function(){
    const task = parseInt(document.getElementById("task").innerHTML);
    const done = parseInt(document.getElementById("done").innerHTML);
    const btn = document.getElementById("b6");
    
    btn.disabled = true;
          alert("Board updated successfully"); 
          if(task==1){
            alert("Congratulations!!! You've completed all the tasks");
         }

          document.getElementById("task").innerHTML = (task - 1);
          document.getElementById("done").innerHTML = (done + 1);

          const child = document.createElement("div");
          const formattedDate = new Date().toLocaleString();

          child.innerHTML = `
          You have completed the task - ${document.getElementById("t6").innerText} at ${formattedDate}
          `;

          const parent = document.getElementById("container");
          child.classList.add("activity")
          parent.appendChild(child);

    
})

document.getElementById("hisbtn")
.addEventListener("click", function(){

  const parent = document.getElementById("container");

  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
  

})

document.getElementById("discover")
.addEventListener("click",function(){
  window.location.href="discover.html"
})

document.getElementById("theme")
.addEventListener("click",function(){

  let color = "#";
  const a = Math.random().toString(16).slice(2,8);
  color+=a;
  
  document.getElementById("cng").style.backgroundColor = color;

})