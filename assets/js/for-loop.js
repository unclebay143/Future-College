

// Array of teams

let team = [
  {
    "fullName" : "Ayodele S. Adebayo",
    "stack" : "Frontend",
    "location" : "Abuja",
    "img" : "/assets/img/1.jpg",
    "phone" : "090827162355",
  },
  {
    "fullName" : "Durojaye Toba",
    "stack" : "Backend",
    "location" : "Kwara",
    "img" : "/assets/img/3.jpeg",
    "phone" : "090827162355",
  },
  {
    "fullName" : "Adedayo Steven Adeolu",
    "stack" : "UI Design",
    "location" : "Kwara",
    "img" : "/assets/img/4.jpg",
  }
]

newMate = {// add new team mate from code
  "fullName" : "Aremu Aishat",
    "stack" : "Product Manager",
    "location" : "Lagos",
    "img" : "/assets/img/2.jpg",
}
team.push(user)

teamDetails = ''


/*
    FOR LOOP
      - Faster
*/
// time speed
console.time("for_loop");
    
for(i=0; i<team.length; i++){
   teamDetails += `<div class="profile-container" id="${i}">
  <img src="${team[i].img}" alt="${team[i].fullName} Image"> <br>
  <div ="txt-info">
    <strong>Full Name</strong> : <span class="info">${team[i].fullName}</span> <br>
    <strong>Stack</strong> : <span class="info">${team[i].stack}</span> <br>
    <strong>Location</strong> : <span class="info">${team[i].location}</span> <br>
    <div class="btn-container">
      <button class="btn del-btn" onclick="deleteMember(${i});">Delete</button>
      <button class="btn edit-btn">Edit</button>
    </div>
  </div>
  </div><hr>` 
}
document.getElementById("theTeam").innerHTML = teamDetails;

// time speed
console.timeEnd("for_loop");



/*EXERCISE*/

// Function to add new user from input

 let addNew = () => {
      // team = ''
      let newName = document.getElementById("name").value;
      let newStack = document.getElementById("stack").value;
      let newLocation = document.getElementById("location").value;
      let newTel = document.getElementById("tel").value;

      newUser = {
        "fullName" : newName,
        "stack" : newStack,
        "location" : newLocation,
        "phone" : newTel,
      }

      team.push(newUser);
        teamDetails += `<div class="profile-container" id="${i}">
          <img src="/assets/img/3.jpeg" alt="${newUser.fullName} Image"> <br>
          <div ="txt-info">
            <strong>Full Name</strong> : <span class="info">${newUser.fullName}</span> <br>
            <strong>Stack</strong> : <span class="info">${newUser.stack}</span> <br>
            <strong>Location</strong> : <span class="info">${newUser.location}</span> <br>
            <div class="btn-container">
              <button class="btn del-btn" onclick="deleteMember(${i});">Delete</button>
              <button class="btn edit-btn">Edit</button>
            </div>
          </div>
          </div><hr>` 
        document.getElementById("theTeam").innerHTML = teamDetails;    
        document.getElementById("addbtn").addEventListener("click", addNew) 

    };

// ****** DELETE FUNCTION *******

function deleteMember(x){
sure = confirm("Are you sure you want to delete this?")
if (sure == true){
  del = document.getElementById(x);
  team.splice(x,1)
  del.remove()
}else{
  return;
}

};



