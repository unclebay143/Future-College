// PROGRAM THAT PERFORM CRUD ON VERSATILE MEMORY

let studentDb = // Student Database
[ 
  {
    "name" : "Ayodele Samuel Adebayo",
    "department" : "Computer Science",
    "gradePoint" : "3.6",
    "img" : "assets/img/3.jpeg",
    "admissionStatus" : "Admitted"
  },
  {
    "name" : "Durojaye Felix Toba",
    "department" : "Computer Science",
    "gradePoint" : "3.7",
    "img" : "assets/img/5.jpg",
    "admissionStatus" : "Admitted"

  },
  {
    "name" : "Ayodele Samuel Adebayo",
    "department" : "Political Science",
    "gradePoint" : "3.8",
    "img" : "assets/img/4.jpg",
    "admissionStatus" : "Admitted"
  }
]


let viewRecord = () =>
{ // list of all students in the studentDb (array)
  var tempRecord = "";
  for(i=0; i < studentDb.length; i++)
  {
    tempRecord +=
    `
      <div class="profile" id="${i}">
        <div class="student_details ${studentDb[i].name}profile">
          <img src='${studentDb[i].img}' alt="${studentDb[i].name}">
        </div>
        <div class="student_details ${studentDb[i].name}profile">
          <strong>Admission Status</strong>: <span>${studentDb[i].admissionStatus}</span>
        </div>
        <div class="student_details ${studentDb[i].name}profile">
          <strong>Name</strong>: <span>${studentDb[i].name}</span>
        </div>
        <div class="student_details ${studentDb[i].name}profile">
          <strong>Department</strong>: <span>${studentDb[i].department}</span>
        </div>
        <div class="student_details ${studentDb[i].name}profile">
          <strong>Grade Point</strong>: <span>${studentDb[i].gradePoint}</span>
        </div>
        <div class="btn">
          <button class="del-btn" onClick="removeStudent(${i})">Rusticate</button>
          <button class="edit-btn" onClick="updateStudentRecord(${i})">Edit Record</button>
        </div>
      </div>
    `  
  };
  document.getElementById("students").innerHTML = tempRecord;
};

viewRecord(); // revoke function listOfStudent

/* 

  >>>> Add new student after admission <<<<

*/

let newStudentEntry = () =>
{
  // binding values from form to variable for validation 
  name = document.getElementById("fullname").value;
  department = document.getElementById("department").value;
  gradePoint = document.getElementById("gradepoint").value;

 
  if (!name && !department && !gradePoint){  // empty form validation control 
    alert("can't be empty")
  }
  else 
  {
    let newRecord =
    { // binding values to array object keys
      "name" : name,
      "department" : department,  
      "gradePoint" : gradePoint,
      "img" : "assets/img/4.jpg",
      "admissionStatus" : "Admitted"
    }
    studentDb.push(newRecord);
    viewRecord();
}

  }
  
/* 
  >>>> Function to delete student record <<<<
*/
let removeStudent = (studentId) =>
{
  dangerZone = confirm(`
  Are you sure you want to delete ${studentDb[studentId].name}'s record?
  Warning: this action is irreversible.`)
  if (dangerZone == true)
  {
    studentDb.splice(studentId, 1); // locate and delete the pass id
    viewRecord() // show updated student database
  }
  else
  {
    return;
  }
  
}

/* 
  Function to Edit student entry
*/

let updateStudentRecord = (studentId) =>
{
  let updateRecord = 
    {
      "name" : prompt("Update name:", studentDb[studentId].name),
      "department" : prompt("Change Department (takes effect after 2 working days):", studentDb[studentId].department),
      "gradePoint" : alert(`Change Grade Point ${studentDb[studentId].gradePoint} : "Only HOD can perform this action`),
      "gradePoint" : studentDb[studentId].gradePoint,
      "img" : "assets/img/4.jpg",
      "admissionStatus" : prompt(`Current Admission Status: ${studentDb[studentId].admissionStatus}
        Type Status
          1. Admitted
          2. Graduate
          3. Expel (Temporary)
          4. Expel (Permanent)
      `)
    }
    confirm(`
    Confirm Changes
    1.  ${studentDb[studentId].name} to ${updateRecord.name}
    2.  ${studentDb[studentId].department} to ${updateRecord.department}
    3.  ${studentDb[studentId].admissionStatus} to ${updateRecord.admissionStatus}
    `)
    studentDb[studentId] = updateRecord;
    viewRecord();
}
