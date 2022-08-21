const STATUS = {
  InPr: 'In Progress',
  Done: 'Done',
  Todo: 'Todo',
};

const list = {
  coding: STATUS.InPr,
  work: STATUS.Todo,
  workout: STATUS.Done,
};

function changeStatus(task, status) {
  if (list.task == undefined) {
    console.log(`${task} cannot be changed cause it's not in list`);
  } else {
    list[task] = status;
    console.log(`${task} has successfully changed`);
  }
}

function addTask(task) {
  if (task in list) {
    console.log(`${task} already exists`);
  } else {
    list.task = STATUS.Todo;
    console.log(`${task} was successfully created`);
  }
}

function deleteTask(task) {
  if (task in list) {
    delete task;
  } else {
    console.log(`${task} don't exists`);
  }
}

function showList() {
  let statToDo = '';
  let statInPr = '';
  let statDone = '';

  for (let key in list) {
    if (list[key] == STATUS.To_Do) {
      statToDo += `"${key}"\n `;
    }
    if (list[key] == STATUS.In_Progress) {
      statInPr += `"${key}"\n `;
    }

    if (list[key] == STATUS.Done) {
      statDone += `"${key}"\n `;
    }
  }
  console.log(`\n `);

  if (statToDo !== '') {
    console.log(`To Do:\n` + statToDo);
  } else {
    console.log(`To Do:\n - \n`);
  }

  if (statDone !== '') {
    console.log(`Done:\n` + statDone);
  } else {
    console.log(`Done:\n - \n `);
  }

  if (statInPr !== '') {
    console.log(`In Progress:\n` + statInPr);
  } else {
    console.log(`In Progress:\n - \n `);
  }
}

addTask('playing');
addTask('listen music');
deleteTask('playing');
changeStatus('listen music', 'done');
showList();
