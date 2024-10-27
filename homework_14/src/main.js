/*
* Вам необхідно створити конструктор Студента, у якого мають бути властивості: ім'я, прізвище, рік народження, оцінки,
* відвідуваність, курс. Кількість оцінок і відвіданих занять залежить від курсу, на якому займається студент. Так само
* у Студента є методи: додати оцінку, додати відвідування, отримати середню успішність, отримати середнє відвідування,
* отримати кількість пройдених занять, змінити курс (мають оновитися дані про курс), а також отримати всю інформацію
* про студента.
* */

// function Student(firstName, lastName, birthYear, course) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthYear = birthYear;
//     this.course = course;
//     this.grades = [];
//     this.attendance = 0;
// }
//
// Student.prototype.addGrade = function (grade) {
//     this.grades.push(grade);
// };
//
// Student.prototype.addAttendance = function () {
//     this.attendance++;
// };
//
// Student.prototype.getAverageGrade = function () {
//     if (this.grades.length === 0) return 0;
//     const total = this.grades.reduce((acc, grade) => acc + grade, 0);
//     return total / this.grades.length;
// };
//
// Student.prototype.getAverageAttendance = function (totalClasses) {
//     return (this.attendance / totalClasses) * 100;
// };
//
// Student.prototype.getCompletedClasses = function () {
//     return this.attendance;
// };
//
// Student.prototype.changeCourse = function (newCourse) {
//     this.course = newCourse;
//     this.grades = [];
//     this.attendance = 0;
// };
//
// Student.prototype.getStudentInfo = function() {
//     return `Ім'я: ${this.firstName}
// Прізвище: ${this.lastName}
// Рік народження: ${this.birthYear}
// Курс: ${this.course}
// Середній бал: ${this.getAverageGrade().toFixed(2)}
// Середня відвідуваність: ${(this.getAverageAttendance() * 100).toFixed(2)}%
// Кількість занять: ${this.attendance.length}`;
// };
//
// const student = new Student("Василь", "Гладьо", 1992, 2);
//
// student.addGrade(5);
// student.addGrade(4);
// student.addAttendance();
// student.addAttendance();
//
// // console.log(student instanceof Student);
// console.log(student.getStudentInfo());
//
// console.log("Середня успішність:", student.getAverageGrade());
// console.log("Середнє відвідування:", student.getAverageAttendance(10) + "%");
//
// student.changeCourse(3);
//
// console.log(student.getStudentInfo());
// console.log('=======================================');

/*
* Додати Студенту можливість навчатися на кількох курсах з можливістю додавання і видалення курсу.
* */

// function Student(firstName, lastName, birthYear) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthYear = birthYear;
//     this.courses = {};
// }
//
// Student.prototype.addCourse = function (course) {
//     if (!this.courses[course]) {
//         this.courses[course] = { grades: [], attendance: 0 };
//     } else {
//         console.log(`Курс ${course} вже доданий.`);
//     }
// };
//
// Student.prototype.removeCourse = function (course) {
//     if (this.courses[course]) {
//         delete this.courses[course];
//     } else {
//         console.log(`Курс ${course} не знайдено.`);
//     }
// };
//
// Student.prototype.addGrade = function (course, grade) {
//     if (this.courses[course]) {
//         this.courses[course].grades.push(grade);
//     } else {
//         console.log(`Курс ${course} не знайдено.`);
//     }
// };
//
// Student.prototype.addAttendance = function (course) {
//     if (this.courses[course]) {
//         this.courses[course].attendance++;
//     } else {
//         console.log(`Курс ${course} не знайдено.`);
//     }
// };
//
// Student.prototype.getAverageGrade = function (course) {
//     const courseData = this.courses[course];
//     if (courseData && courseData.grades.length > 0) {
//         const total = courseData.grades.reduce((acc, grade) => acc + grade, 0);
//         return total / courseData.grades.length;
//     }
//     return 0;
// };
//
// Student.prototype.getStudentInfo = function(totalClassesPerCourse) {
//     let info = `Ім'я: ${this.firstName}\nПрізвище: ${this.lastName}\nРік народження: ${this.birthYear}\n`;
//
//     const coursesInfo = Object.keys(this.courses).map(course => {
//         const averageGrade = this.getAverageGrade(course).toFixed(2);
//         const attendancePercentage = ((this.courses[course].attendance / totalClassesPerCourse) * 100).toFixed(2);
//         return `Курс: ${course}, Середній бал: ${averageGrade}, Відвідуваність: ${attendancePercentage}%`;
//     }).join('\n');
//
//     return info + (coursesInfo || "Немає зареєстрованих курсів.");
// };
//
// const student = new Student("Василь", "Гладьо", 1992);
//
// student.addCourse("Математика");
// student.addCourse("Фізика");
//
//
// student.addGrade("Математика", 4);
// student.addAttendance("Математика");
//
// student.addGrade("Фізика", 3);
// student.addAttendance("Фізика");
//
// console.log(student.getStudentInfo(10));
//
// student.removeCourse("Фізика");
// console.log(student.getStudentInfo(10));



// Конструктор для Студента
function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.courses = {};
}

Student.prototype.addCourse = function (course) {
    if (!this.courses[course]) {
        this.courses[course] = { grades: [], attendance: 0 };
    } else {
        console.log(`Курс ${course} вже доданий.`);
    }
};

Student.prototype.removeCourse = function (course) {
    if (this.courses[course]) {
        delete this.courses[course];
    } else {
        console.log(`Курс ${course} не знайдено.`);
    }
};

Student.prototype.addGrade = function (course, grade) {
    if (this.courses[course]) {
        this.courses[course].grades.push(grade);
    } else {
        console.log(`Курс ${course} не знайдено.`);
    }
};

Student.prototype.addAttendance = function (course) {
    if (this.courses[course]) {
        this.courses[course].attendance++;
    } else {
        console.log(`Курс ${course} не знайдено.`);
    }
};

Student.prototype.getAverageGrade = function (course) {
    const courseData = this.courses[course];
    if (courseData && courseData.grades.length > 0) {
        const total = courseData.grades.reduce((acc, grade) => acc + grade, 0);
        return total / courseData.grades.length;
    }
    return 0;
};

Student.prototype.getStudentInfo = function(totalClassesPerCourse) {
    let info = `Ім'я: ${this.firstName}\nПрізвище: ${this.lastName}\nРік народження: ${this.birthYear}\n`;

    const coursesInfo = Object.keys(this.courses).map(course => {
        const averageGrade = this.getAverageGrade(course).toFixed(2);
        const attendancePercentage = ((this.courses[course].attendance / totalClassesPerCourse) * 100).toFixed(2);
        return `Курс: ${course}, Середній бал: ${averageGrade}, Відвідуваність: ${attendancePercentage}%`;
    }).join('\n');

    return info + (coursesInfo || "Немає зареєстрованих курсів.");
};

// Конструктор для Групи
function Group() {
    this.students = [];
}

// Додає студента до групи
Group.prototype.addStudent = function(student) {
    if (student instanceof Student) {
        this.students.push(student);
    } else {
        console.log("Тільки екземпляри класу Student можна додати до групи.");
    }
};

// Видаляє студента з групи
Group.prototype.removeStudent = function(student) {
    this.students = this.students.filter(s => s !== student);
};

// Повертає рейтинг студентів за успішністю для вказаного курсу
Group.prototype.getRatingByGrade = function(course) {
    return this.students
        .map(student => ({
            name: `${student.firstName} ${student.lastName}`,
            grade: student.getAverageGrade(course)
        }))
        .sort((a, b) => b.grade - a.grade);
};

// Повертає рейтинг студентів за відвідуваністю для вказаного курсу
Group.prototype.getRatingByAttendance = function(course, totalClasses) {
    return this.students
        .map(student => {
            const attendance = student.courses[course] ? student.courses[course].attendance : 0;
            return {
                name: `${student.firstName} ${student.lastName}`,
                attendance: (attendance / totalClasses) * 100
            };
        })
        .sort((a, b) => b.attendance - a.attendance);
};

// Приклад використання
const student1 = new Student("Василь", "Гладьо", 1992);
const student2 = new Student("Ігор", "Мирошниченко", 1993);

student1.addCourse("Математика");
student1.addGrade("Математика", 4);
student1.addAttendance("Математика");

student2.addCourse("Математика");
student2.addGrade("Математика", 5);
student2.addAttendance("Математика");
student2.addAttendance("Математика");

const group = new Group();
group.addStudent(student1);
group.addStudent(student2);

console.log("Рейтинг за успішністю (Математика):", group.getRatingByGrade("Математика"));
console.log("Рейтинг за відвідуваністю (Математика):", group.getRatingByAttendance("Математика", 10));
console.log(group);
