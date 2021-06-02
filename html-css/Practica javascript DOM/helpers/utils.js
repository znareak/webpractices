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
  localStorage.setItem("users", json(users));
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

function editUserByPayload(userToEdit, payload) {
  const users = getUsers();
  let newUsers = users.map((user) => {
    if (
      user.email === userToEdit.email &&
      user.password === userToEdit.password
    ) {
      return {
        email: payload.email || user.email,
        name: payload.name || user.name,
        password: payload.password || user.password,
        id: user.id,
      };
    }
    return user;
  });

  console.log(newUsers);
  saveUsers(newUsers);
}

function existsEmail(email) {
  const users = getUsers();
  return users.some((user) => user.email === email);
}

function toggleModal(container) {
  container.classList.toggle("hide");
  container.querySelector("span.error").classList.remove("show");
  container.querySelector("input[type='email']").classList.remove("invalid");
  container.querySelector("button[type='submit']").disabled = false;
}

function addRowInTable(user, tableUsers) {
  const tr = document.createElement("tr");
  const tpl = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.password}</td>
          <td>
              <div class="buttons">
                <button class="button-icon" data-delete-id="${user.id}">
                  <i class="fa fa-trash"></i>
                </button>
                
                <button class="button-icon" data-edit-id="${user.id}">
                  <i class="fa fa-user-edit"></i>
                </button>
              </div>
          </td>
        `;
  tr.id = user.id;
  tr.innerHTML = tpl;
  tableUsers.appendChild(tr);
}

function loadUsersInTable(tableUsers) {
  const users = getUsers();
  users.forEach((user) => {
    addRowInTable(user, tableUsers);
  });
}

function setToggleModalEvent(trigger, modalContainer) {
  trigger.addEventListener("click", () => toggleModal(modalContainer));
}

function setTogglerModal(buttons, containers) {
  for (let i = 0; i < containers.length; i++) {
    const container = containers[i];
    const btnClose = buttons[i];
    setToggleModalEvent(btnClose, container);
  }
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
  json,
  getUsers,
  saveUser,
  getUserLastId,
  deleteUserById,
  findUserById,
  notifier,
  existsEmail,
  editUserByPayload,
  getId,
  selector,
  toggleModal,
  addRowInTable,
  loadUsersInTable,
  setToggleModalEvent,
  setTogglerModal,
  checkEmail,
};
