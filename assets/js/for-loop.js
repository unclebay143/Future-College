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


let studentRecord = () =>
{ // list of all students in the studentDb (array)
  var tempListContainer = "";
  for(i=0; i < studentDb.length; i++)
  {
    tempListContainer +=
    `
      <div class="profile" id="${i}">
        <div class"student_details ${studentDb[i].name}profile">
          <img src='${studentDb[i].img}' alt=${studentDb[i].name}>
        </div>
        <div class"student_details ${studentDb[i].name}profile">
          <strong>Admission Status</strong>:<span>${studentDb[i].admissionStatus}</span>
        </div>
        <div class"student_details ${studentDb[i].name}profile">
          <strong>Name</span>:<span>${studentDb[i].name}</span>
        </div>
        <div class"student_details ${studentDb[i].name}profile">
          <strong>Department</strong>:<span>${studentDb[i].department}</span>
        </div>
        <div class"student_details ${studentDb[i].name}profile">
          <strong>Grade Point</strong>:<span>${studentDb[i].gradePoint}</span
        div>
        <div class="btn">
          <button onClick="removeStudent(${i})">Rusticate</button>
          <button onClick="removeStudent(${i})">Edit Record</button>
        <div>
      </div>
    `  
  };
  // studentDb.push(tempListContainer);
  document.getElementById("students").innerHTML = tempListContainer;
};

studentRecord(); // revoke function listOfStudent

// Function to delete student record

let removeStudent = (studentId) =>
{
  studentDb.splice(studentId, 1);
  studentRecord()
}

// Add new student after admission

let newStudentEntry = () =>
{

}

