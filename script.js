// task. Получить электронную почту
// Завершите функцию getEmail, чтобы она возвращала электронное письмо без начальных и конечных пробелов.

console.log(
  "\n",
  "----------------------- Электронная почта ----------------------------",
  "\n"
);

function getEmail(email) {
  return email.trim();
}

// Sample usage - do not modify
console.log(getEmail("  alex@gmail.com  "));
console.log(getEmail("  alex@gmail.com"));
console.log(getEmail("bron@gmail.com   "));

// task. Получение имени
// Завершите функцию getName, чтобы она преобразовывала полученное имя в верхний регистр и удаляла начальные и конечные пробелы.
console.log(
  "\n",
  "----------------------- Получение имени ----------------------------",
  "\n"
);

function getName(name) {
  return name.trim().toUpperCase();
}

// Sample usage - do not modify
console.log(getName(" sam"));
console.log(getName(" alex  "));

// project. Конвертер километров в мили
// https://codesandbox.io/s/converter-da-7whsyr?file=/src/js/convert.js:41-61

// project. Градусы Цельсия в Фаренгейты
// https://codesandbox.io/s/celsius-project-da-l29fhl

// task. Инициалы пользователя
console.log(
  "\n",
  "----------------------- Инициалы ----------------------------",
  "\n"
);

const user1 = {
  firstName: "Sam",
  lastName: "Doe",
  age: 20,
};

const user2 = {
  firstName: "Charlie",
  lastName: "Fort",
  age: 31,
};

function getIntials(user) {
  return `${user.firstName[0]}${user.lastName[0]}`;
}

// Sample usage - do not modify
console.log(getIntials(user1)); // "SD"
console.log(getIntials(user2)); // "CF"

console.log(
  "\n",
  "----------------------- Добавление ключа ----------------------------",
  "\n"
);
// task. Добавление чисел
// Завершите функцию addNumberOfChapters, чтобы она добавила ключ numberOfChapters в объект course.

const course1 = {
  name: "Learn English",
  isCompleted: true,
};

const course2 = {
  name: "Learn JavaScript",
  isCompleted: false,
};

/**
 * @param {Object[]} course
 * @param {number} count
 */
function addNumberOfChapters(course, count) {
  course.numberOfChapters = count;
  return course;
}

// Sample usage - do not modify
console.log(addNumberOfChapters(course1, 80)); // { name: 'Learn English', isCompleted: true, numberOfChapters: 80 }
console.log(addNumberOfChapters(course2, 60)); // { name: 'Learn JavaScript', isCompleted: false, numberOfChapters: 60 }

// task. Сумма оценок
// Завершите функцию getSumOfGrades, чтобы она возвращала сумму всех оценок.
console.log(
  "\n",
  "----------------------- Сумма оценок ----------------------------",
  "\n"
);

const student = {
  name: "Sam Doe",
  age: 24,
  grades: [13, 15, 15, 14, 18],
};

/**
 * @param {Object} student
 * @param {string} student.name
 * @param {number} student.age
 * @param {number[]} student.grades
 */
function getSumOfGrades(student) {
  let sum = 0;
  student.grades.forEach(function (grade) {
    sum += grade;
  });
  return sum;
}

// Sample usage - do not modify
console.log(getSumOfGrades(student)); // 75

// project. Todo
// Завершите функцию createTodo, чтобы она возвращала объект todo
// Решение:
// https://codesandbox.io/s/easy-todo-da-vng6sy?file=/src/js/todo.js