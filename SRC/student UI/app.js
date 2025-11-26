const API_URL = "http://localhost:3000/students";

//  -----  فارم سبمٹ ہونے پر نیا اسٹوڈنٹ ایڈ کرنا  -----
document.getElementById("studentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const marks = document.getElementById("marks").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, marks }),
  });

  loadStudents();
  e.target.reset();
});

//  -----  سارے اسٹوڈنٹس دکھانا  -----
async function loadStudents() {
  const res = await fetch(API_URL);
  const students = await res.json();

  const list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((stu) => {
    list.innerHTML += `
      <tr>
        <td>${stu.name}</td>
        <td>${stu.marks}</td>

        <td>
          <button class="action-btn edit" onclick="editStudent('${stu.id}', '${stu.name}', '${stu.marks}')">Edit</button>

          <button class="action-btn delete" onclick="deleteStudent('${stu.id}')">Delete</button>
        </td>
      </tr>
    `;
  });
}

//  -----  اسٹوڈنٹ ڈیلیٹ کرنا  -----
async function deleteStudent(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadStudents();
}

//  -----  اسٹوڈنٹ ایڈٹ کرنا  -----
async function editStudent(id, oldName, oldMarks) {
  const newName = prompt("Enter new name:", oldName);
  const newMarks = prompt("Enter new marks:", oldMarks);

  if (!newName || !newMarks) return;

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: newName, marks: newMarks }),
  });

  loadStudents();
}

//  -----  شروع میں لوڈ کرنا  -----
loadStudents();
