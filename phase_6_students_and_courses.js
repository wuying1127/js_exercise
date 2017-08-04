function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function() {
  return `${this.firstName} ${this.lastName}`;
};

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course)) {
    this.courses.forEach(crs => {
      if (crs.conflictsWith(course)) {
        throw 'Already enrolled or time conflict, please add another course';
      }
    });

    this.courses.push(course);
    course.addStudent(this);
  }
};

Student.prototype.hasConflict = function(course) {
  this.courses.forEach(crs => {
    if (crs.conflictsWith(course)) {
      return true;
    }
  });

  return false;
};

Student.prototype.courseLoad = function() {
  const result = {};

  this.courses.forEach(course => {
    result[course.dept] = result[course.dept] || 0;
    result[course.dept] += course.credits;
  });

  return result;
};

function Course(name, dept, credits, days, block) {
  this.name = name;
  this.dept = dept;
  this.credits = credits;
  this.students = [];
  this.days = days;
  this.block = block;
}

Course.prototype.addStudent = function(student) {
  if (this.students.indexOf(student) === -1) {
    this.students.push(student);
    student.enroll(this);
  }
};

Course.prototype.conflictsWith = function(other) {
  if (this.block !== other.block) { return false;}

  return this.days.some(day => other.days.indexOf(day) !== -1);
};

let student1 = new Student("Nigel", "Leffler");
let student2 = new Student("Steve", "Jobs");
let course1 = new Course("101", "CS", 3, ["mon", "wed", "fri"], 1);
let course2 = new Course("201", "CS", 3, ["wed"], 1);
let course3 = new Course("301", "ENG", 3, ["tue"], 1);
let course4 = new Course("401", "BIO", 3, ["mon", "wed", "fri"], 2);
student1.enroll(course1);
student1.enroll(course3);
student1.enroll(course2);
