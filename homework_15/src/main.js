
//Дане завдання виконав з допомогою chatgpt

//  Вам необхідно написати додаток 'Todo list',
//  використовуючи синтаксис класів. У списку нотаток повинні бути методи для додавання нової нотатки, видалення,
//  редагування та отримання повної інформації про нотатку, а так само отримання списку всіх нотаток. Крім цього, у
//  користувача має бути можливість позначити замітку, як виконану, і отримання інформації про те, скільки всього
//  нотаток у списку і скільки залишилося невиконань. Нотатки не повинні бути порожніми.

// class TodoItem {
//     constructor(content) {
//         if (!content) {
//             throw new Error("Нотатка не може бути порожньою.");
//         }
//         this.content = content;
//         this.isCompleted = false;
//     }
//
//     markAsCompleted() {
//         this.isCompleted = true;
//     }
//
//     editContent(newContent) {
//         if (!newContent) {
//             throw new Error("Нотатка не може бути порожньою.");
//         }
//         this.content = newContent;
//     }
//
//     getInfo() {
//         return {
//             content: this.content,
//             isCompleted: this.isCompleted
//         };
//     }
// }
//
// class TodoList {
//     constructor() {
//         this.todos = [];
//     }
//
//     addTodo(content) {
//         const todo = new TodoItem(content);
//         this.todos.push(todo);
//     }
//
//     removeTodo(index) {
//         if (index < 0 || index >= this.todos.length) {
//             throw new Error("Неправильний індекс нотатки.");
//         }
//         this.todos.splice(index, 1);
//     }
//
//     editTodo(index, newContent) {
//         if (index < 0 || index >= this.todos.length) {
//             throw new Error("Неправильний індекс нотатки.");
//         }
//         this.todos[index].editContent(newContent);
//     }
//
//     markTodoAsCompleted(index) {
//         if (index < 0 || index >= this.todos.length) {
//             throw new Error("Неправильний індекс нотатки.");
//         }
//         this.todos[index].markAsCompleted();
//     }
//
//     getAllTodos() {
//         return this.todos.map((todo, index) => ({
//             index,
//             ...todo.getInfo()
//         }));
//     }
//
//     getSummary() {
//         const total = this.todos.length;
//         const uncompleted = this.todos.filter(todo => !todo.isCompleted).length;
//         return {
//             total,
//             uncompleted
//         };
//     }
// }
//
// const todoList = new TodoList();
// todoList.addTodo("Закінчити проект");
// todoList.addTodo("Підготувати звіт");
//
// todoList.editTodo(1, "Підготувати фінальний звіт");
// todoList.markTodoAsCompleted(0);
//
// console.log("Всі нотатки:", todoList.getAllTodos());
// console.log("Резюме:", todoList.getSummary());


/*
* Вам необхідно розширити можливості вашого списку і додати методи для пошуку замітки на ім'я, а також методи для
* сортування нотаток за статусом (спочатку виконані і навпаки).
* */

// class Note {
//     constructor(title, content) {
//         if (!title || !content) {
//             throw new Error('Title and content cannot be empty.');
//         }
//         this.title = title;
//         this.content = content;
//         this.completed = false;
//     }
//
//     editContent(newContent) {
//         this.content = newContent;
//     }
//
//     markAsCompleted() {
//         this.completed = true;
//     }
//
//     getInfo() {
//         return {
//             title: this.title,
//             content: this.content,
//             completed: this.completed
//         };
//     }
// }
//
// class TodoList {
//     constructor() {
//         this.notes = [];
//     }
//
//     addNote(title, content) {
//         const note = new Note(title, content);
//         this.notes.push(note);
//     }
//
//     removeNote(title) {
//         this.notes = this.notes.filter(note => note.title !== title);
//     }
//
//     editNote(title, newContent) {
//         const note = this.notes.find(note => note.title === title);
//         if (note) {
//             note.editContent(newContent);
//         }
//     }
//
//     getNoteInfo(title) {
//         const note = this.notes.find(note => note.title === title);
//         return note ? note.getInfo() : null;
//     }
//
//     getAllNotes() {
//         return this.notes.map(note => note.getInfo());
//     }
//
//     markNoteAsCompleted(title) {
//         const note = this.notes.find(note => note.title === title);
//         if (note) {
//             note.markAsCompleted();
//         }
//     }
//
//     getTotalNotes() {
//         return this.notes.length;
//     }
//
//     getRemainingNotes() {
//         return this.notes.filter(note => !note.completed).length;
//     }
//
//     findNoteByTitle(title) {
//         return this.notes.filter(note => note.title.includes(title));
//     }
//
//     sortNotesByStatus() {
//         return this.notes.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
//     }
// }
//
// const todoList = new TodoList();
// todoList.addNote('Buy groceries', 'Milk, Bread, Eggs');
// todoList.addNote('Read a book', 'The Catcher in the Rye');
// todoList.addNote('Go to the gym', 'Leg day workout');
// todoList.markNoteAsCompleted('Read a book');
//
// console.log(todoList.getAllNotes());
// console.log('Total notes:', todoList.getTotalNotes());
// console.log('Remaining notes:', todoList.getRemainingNotes());
// console.log('Found notes:', todoList.findNoteByTitle('Buy'));
// console.log('Sorted notes:', todoList.sortNotesByStatus());

/*
* Вам необхідно додати кожній нотатці дату її створення і редагування, а також розширити можливості пошуку і сортування,
* включивши в них можливість роботи з датою.
* */

class Note {
    constructor(title, content) {
        if (!title || !content) {
            throw new Error('Title and content cannot be empty.');
        }
        this.title = title;
        this.content = content;
        this.completed = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    editContent(newContent) {
        this.content = newContent;
        this.updatedAt = new Date();
    }

    markAsCompleted() {
        this.completed = true;
    }

    getInfo() {
        return {
            title: this.title,
            content: this.content,
            completed: this.completed,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

class TodoList {
    constructor() {
        this.notes = [];
    }

    addNote(title, content) {
        const note = new Note(title, content);
        this.notes.push(note);
    }

    removeNote(title) {
        this.notes = this.notes.filter(note => note.title !== title);
    }

    editNote(title, newContent) {
        const note = this.notes.find(note => note.title === title);
        if (note) {
            note.editContent(newContent);
        }
    }

    getNoteInfo(title) {
        const note = this.notes.find(note => note.title === title);
        return note ? note.getInfo() : null;
    }

    getAllNotes() {
        return this.notes.map(note => note.getInfo());
    }

    markNoteAsCompleted(title) {
        const note = this.notes.find(note => note.title === title);
        if (note) {
            note.markAsCompleted();
        }
    }

    getTotalNotes() {
        return this.notes.length;
    }

    getRemainingNotes() {
        return this.notes.filter(note => !note.completed).length;
    }

    findNoteByTitle(title) {
        return this.notes.filter(note => note.title.includes(title));
    }

    sortNotesByStatus() {
        return this.notes.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
    }

    sortNotesByCreationDate() {
        return this.notes.sort((a, b) => b.createdAt - a.createdAt);
    }

    sortNotesByUpdateDate() {
        return this.notes.sort((a, b) => b.updatedAt - a.updatedAt);
    }
}

const todoList = new TodoList();
todoList.addNote('Buy groceries', 'Milk, Bread, Eggs');
todoList.addNote('Read a book', 'The Catcher in the Rye');
todoList.addNote('Go to the gym', 'Leg day workout');
todoList.markNoteAsCompleted('Read a book');

console.log(todoList.getAllNotes());
console.log('Total notes:', todoList.getTotalNotes());
console.log('Remaining notes:', todoList.getRemainingNotes());
console.log('Found notes:', todoList.findNoteByTitle('Buy'));
console.log('Sorted notes by status:', todoList.sortNotesByStatus());
console.log('Sorted notes by creation date:', todoList.sortNotesByCreationDate());
console.log('Sorted notes by update date:', todoList.sortNotesByUpdateDate());


