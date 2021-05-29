const notifier = new Notifier({
  default_time: 2000,
});

function getId(id) {
  return document.getElementById(id);
}

function selector(slctor) {
  return document.querySelectorAll(slctor);
}

function json(obj) {
  return JSON.stringify(obj);
}

function getUsers() {
  const users = localStorage.getItem("users");
  if (!users) return [];
  return JSON.parse(users);
}

function getUserLastId() {
  const users = getUsers();
  const id = users[users.length - 1]?.id + 1 || 0;
  return id;
}

function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function deleteUserById(_id) {
  const id = parseInt(_id);
  const users = getUsers();
  const filterUsers = users.filter((user) => user.id !== id);
  saveUsers(filterUsers);
  notifier.notify("success", "User deleted!");
}

function existsEmail(email) {
  const users = getUsers();
  return users.some((user) => user.email === email);
}

function loadEvents() {
  const buttons = selector("button[data-delete-id]");
  for (const btn of buttons) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      const id = btn.getAttribute("data-delete-id");
      const row = document.getElementById(id);
      deleteUserById(id);
      row.remove();
    });
  }
}

export {
  json,
  getUsers,
  saveUser,
  getUserLastId,
  notifier,
  existsEmail,
  getId,
  selector,
  loadEvents,
};
