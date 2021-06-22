const notifier = () =>
  new Notifier({
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

function reload() {
  window.location.reload();
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
  user.id = getUserLastId();
  users.push(user);
  localStorage.setItem("users", json(users));
  notifier().notify("success", "User added!");
}

function saveUsers(users) {
  localStorage.setItem("users", json(users));
}

function deleteUserById(_id) {
  const id = parseInt(_id);
  const users = getUsers();
  const filterUsers = users.filter((user) => user.id !== id);
  saveUsers(filterUsers);
  notifier().notify("success", "User deleted!");
}

function findUserById(_id) {
  const id = parseInt(_id);
  const users = getUsers();
  return users.find((user) => user.id === id);
}

function existsEmail(email) {
  const users = getUsers();
  return users.some((user) => user.email === email);
}

function toggleVisibility(modal) {
  modal.classList.toggle("hide");
}

function toggleModal(trigger, modal) {
  trigger.addEventListener("click", () => toggleVisibility(modal));
}

function element(nodeName, text = "", props = [], jsProps = []) {
  const node = document.createElement(nodeName);
  for (const [p, v] of Object.entries(props)) node.setAttribute(p, v);
  for (const [p, v] of Object.entries(jsProps)) node[p] = v;
  if (text) node.innerHTML = text;
  return node;
}

function addRowInTable({ user, tableUsers, containerEdit }) {
  const row = element("tr", null, { id: user.id });
  row.appendChild(element("td", user.name));
  row.appendChild(element("td", user.email));
  row.appendChild(element("td", user.password));

  const cellButtons = element("td");
  const divButtons = element("div", null, { class: "buttons" });

  // --- CRUD buttons ----
  const deleteButton = element("button", '<i class="fa fa-trash"></i>', {
    class: "button-icon",
    "data-delete-id": user.id,
  });

  deleteButton.addEventListener("click", () => {
    deleteUserById(user.id);
    reload();
  });

  const editButton = element("button", '<i class="fa fa-user-edit"></i>', {
    class: "button-icon",
    "data-edit-id": user.id,
  });

  editButton.addEventListener("click", () => {
    toggleVisibility(containerEdit);
    containerEdit.querySelector("#name-edit").value = user.name;
    containerEdit.querySelector("#email-edit").value = user.email;
    containerEdit.querySelector("#password-edit").value = user.password;
  });
  divButtons.append(deleteButton, editButton);
  // ---------------------

  cellButtons.appendChild(divButtons);
  row.appendChild(cellButtons);
  tableUsers.appendChild(row);
}

function loadUsersInTable(tableUsers, containerEdit) {
  const users = getUsers();
  users.forEach((user) => {
    addRowInTable({ user, tableUsers, containerEdit });
  });
}

function checkEmail(payload, isModeEdit = false) {
  const {
    errorEmail,
    inputs: { email },
    btnSubmit,
  } = payload;

  email.addEventListener("keyup", (e) => {
    if (isModeEdit && email.getAttribute("data-email") === e.target.value)
      return;
    const invalidEmail = existsEmail(e.target.value);
    btnSubmit.disabled = invalidEmail;
    if (invalidEmail) {
      errorEmail.classList.add("show");
      email.classList.add("invalid");
    } else {
      errorEmail.classList.remove("show");
      email.classList.remove("invalid");
    }
  });
}

export {
  reload,
  getId,
  selector,
  toggleVisibility,
  toggleModal,
  loadUsersInTable,
  addRowInTable,
  saveUser,
};
