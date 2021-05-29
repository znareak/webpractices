import {
  saveUser,
  notifier,
  existsEmail,
  getUserLastId,
  getId,
  loadEvents,
  getUsers,
} from "./helpers/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = getId("container");
  const form = getId("add_user");
  const email = getId("email");
  const password = getId("password");
  const name = getId("name");
  const errorEmail = getId("error-email");
  const closeContainer = getId("close-container");
  const addUser = getId("add-user");
  const tableUsers = getId("table-users");
  const btnSubmit = getId("submit");

  function toggleModal() {
    container.classList.toggle("hide");
  }

  function addRowInTable(user) {
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
                  
                  <button class="button-icon" data-id="${user.id}">
                    <i class="fa fa-user-edit"></i>
                  </button>
                </div>
            </td>
          `;
    tr.id = user.id;
    tr.innerHTML = tpl;
    tableUsers.appendChild(tr);
  }

  function loadUsersInTable() {
    const users = getUsers();
    users.forEach((user) => {
      addRowInTable(user);
    });
  }

  loadUsersInTable();
  loadEvents();

  closeContainer.addEventListener("click", toggleModal);
  addUser.addEventListener("click", toggleModal);

  email.addEventListener("keyup", (e) => {
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

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const parsed = {
      name: name.value,
      password: password.value,
      email: email.value,
      id: getUserLastId(),
    };

    if (!parsed.name || !parsed.password || !parsed.email) return;

    try {
      saveUser(parsed);
      form.reset();
      notifier.notify("success", "User created!");
      addRowInTable(parsed);
      loadEvents();
    } catch (err) {
      notifier.notify("error", "An error ocurred while saving the user");
      console.log(err);
    }
  });
});
