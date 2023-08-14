// Elements for marks
const mathMarks = document.querySelector(".mathMarks");
const math2Marks = document.querySelector(".math2Marks");
const engMarks = document.querySelector(".engMarks");
const phyMarks = document.querySelector(".phyMarks");
const ictMarks = document.querySelector(".ictMarks");
const itMarks = document.querySelector(".itMarks");
const phy2Marks = document.querySelector(".phy2Marks");
const networkMarks = document.querySelector(".networkMarks");
const analogMarks = document.querySelector(".analogMarks");
const drawingMarks = document.querySelector(".drawingMarks");
const cMarks = document.querySelector(".cMarks");
const databaseMarks = document.querySelector(".databaseMarks");
const digitalMarks = document.querySelector(".digitalMarks");
const discreteMarks = document.querySelector(".discreteMarks");

// Elements for grades
const mathGrades = document.querySelector(".mathGrades");
const math2Grades = document.querySelector(".math2Grades");
const engGrades = document.querySelector(".engGrades");
const phyGrades = document.querySelector(".phyGrades");
const ictGrades = document.querySelector(".ictGrades");
const itGrades = document.querySelector(".itGrades");
const phy2Grades = document.querySelector(".phy2Grades");
const networkGrades = document.querySelector(".networkGrades");
const analogGrades = document.querySelector(".analogGrades");
const drawingGrades = document.querySelector(".drawingGrades");
const cGrades = document.querySelector(".cGrades");
const databaseGrades = document.querySelector(".databaseGrades");
const digitalGrades = document.querySelector(".digitalGrades");
const discreteGrades = document.querySelector(".discreteGrades");

const average = document.querySelector(".average");
const retake = document.querySelector(".retake");
const decision = document.querySelector(".decision");

const math1 = prompt(
  "Welcome to Transcript. Let's get started!\nSEMESTER 1\nEnter marks for Math for Eng I (100)"
);
mathMarks.innerHTML = math1;
mathGrades.innerHTML = checkMark(math1);

const english = prompt("Enter english marks");
engMarks.innerHTML = english;
engGrades.innerHTML = checkMark(english);

const phy = prompt("Enter Pyhsics for eng I marks");
phyMarks.innerHTML = phy;
phyGrades.innerHTML = checkMark(phy);

const analog = prompt("Enter Analog cicuit marks");
analogMarks.innerHTML = analog;
analogGrades.innerHTML = checkMark(analog);

const ict = prompt("Enter ICT Skills marks");
ictMarks.innerHTML = ict;
ictGrades.innerHTML = checkMark(ict);

const it = prompt("Enter IT Essentials marks");
itMarks.innerHTML = it;
itGrades.innerHTML = checkMark(it);

const network = prompt("Enter Network Analysis marks");
networkMarks.innerHTML = network;
networkGrades.innerHTML = checkMark(network);

// Second semester
const math2 = prompt("Enter Math for Enginners 2 marks");
math2Marks.innerHTML = math2;
math2Grades.innerHTML = checkMark(math2);

const phy2 = prompt("Enter Physics for Enginners 2 marks");
phy2Marks.innerHTML = phy2;
phy2Grades.innerHTML = checkMark(phy2);

const drawing = prompt("Enter Drawing marks");
drawingMarks.innerHTML = drawing;
drawingGrades.innerHTML = checkMark(drawing);

const c = prompt("SEMESTER 2\nEnter C programming marks");
cMarks.innerHTML = c;
cGrades.innerHTML = checkMark(c);

const database = prompt("Enter Database marks");
databaseMarks.innerHTML = database;
databaseGrades.innerHTML = checkMark(database);

const digital = prompt("Enter Digital Circuit marks");
digitalMarks.innerHTML = digital;
digitalGrades.innerHTML = checkMark(digital);
const discrete = prompt("Enter Discrete Mathematics marks");
discreteMarks.innerHTML = discrete;
discreteGrades.innerHTML = checkMark(discrete);

function calculateAverage(marksArray) {
  const totalMarks = marksArray.reduce(
    (sum, mark) => sum + parseFloat(mark),
    0
  );
  return (totalMarks / marksArray.length).toFixed(2);
}
const marksArray = [
  math1,
  english,
  phy,
  analog,
  ict,
  it,
  network,
  math2,
  phy2,
  drawing,
  c,
  database,
  digital,
  discrete,
];

average.innerHTML = calculateAverage(marksArray);

let countBelow50 = 0;

for (const mark of marksArray) {
  if (parseFloat(mark) < 50) {
    countBelow50++;
  }
}

retake.innerHTML = countBelow50;

decision.innerHTML = countBelow50 > 2 ? "Repeat" : "Pass";
decision.style.color = countBelow50 > 2 ? "red" : "green";

function checkMark(marks) {
  var grade;
  if (marks >= 90) {
    grade = "A";
  } else if (marks >= 80 && marks < 90) {
    grade = "B";
  } else if (marks >= 60 && marks < 80) {
    grade = "C";
  } else if (marks >= 50 && marks < 60) {
    grade = "D";
  } else {
    grade = "FAIL";
  }
  return grade;
}
