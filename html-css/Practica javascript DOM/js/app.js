import {
  saveUser,
  notifier,
  getUserLastId,
  getId,
  deleteUserById,
  findUserById,
  addRowInTable,
  selector,
  editUserByPayload,
  toggleModal,
  setToggleModalEvent,
  setTogglerModal,
  loadUsersInTable,
  checkEmail,
} from "../helpers/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const tableUsers = getId("table-users");
  const containers = selector(".container-overlay");
  const btnsClose = selector(".close-container");

  const addUser = {
    form: getId("add-user-form"),
    btnAdd: getId("add-user"),
    btnSubmit: getId("submit"),
    errorEmail: getId("error-email"),
    inputs: {
      email: getId("email"),
      password: getId("password"),
      name: getId("name"),
    },
  };

  const editUser = {
    form: getId("edit-user-form"),
    btnSubmit: getId("submit-edit"),
    errorEmail: getId("error-email-edit"),
    inputs: {
      email: getId("email-edit"),
      password: getId("password-edit"),
      name: getId("name-edit"),
    },
  };

  function loadEvents() {
    const btnsDelete = selector("button[data-delete-id]");
    const btnsEdit = selector("button[data-edit-id]");

    for (const btn of btnsDelete) {
      if (btn.getAttribute("data-loaded-event") !== "true") {
        btn.setAttribute("data-loaded-event", "true");
        btn.addEventListener("click", (e) => {
          const id = btn.getAttribute("data-delete-id");
          const row = document.getElementById(id);
          console.log(id, row);
          row.remove();
          deleteUserById(id);
        });
      }
    }

    for (const btn of btnsEdit) {
      const { name, password, email } = editUser.inputs;
      if (btn.getAttribute("data-loaded-event") !== "true") {
        btn.setAttribute("data-loaded-event", "true");
        btn.addEventListener("click", (e) => {
          const id = btn.getAttribute("data-edit-id");
          const user = findUserById(id);
          name.value = user.name;
          email.value = user.email;
          password.value = user.password;
          name.setAttribute("data-name", user.name);
          email.setAttribute("data-email", user.email);
          password.setAttribute("data-password", user.password);
          toggleModal(containers[1]);
        });
      }
    }
  }

  loadUsersInTable(tableUsers);
  loadEvents();
  setTogglerModal(btnsClose, containers);
  setToggleModalEvent(addUser.btnAdd, containers[0]);
  setToggleModalEvent(editUser.btnSubmit, containers[1]);
  checkEmail(addUser);
  checkEmail(editUser, true);

  addUser.form.addEventListener("submit", (e) => {
    e.preventDefault();
    const parsed = {
      name: addUser.inputs.name.value,
      password: addUser.inputs.password.value,
      email: addUser.inputs.email.value,
      id: getUserLastId(),
    };

    if (!parsed.name || !parsed.password || !parsed.email) return;

    try {
      saveUser(parsed);
      addUser.form.reset();
      notifier().notify("success", "User created!");
      addRowInTable(parsed, tableUsers);
      loadEvents();
    } catch (err) {
      notifier().notify("error", "An error ocurred while saving the user");
      console.log(err);
    }
  });

  editUser.form.addEventListener("submit", (e) => {
    e.preventDefault();
    const parsed = {
      name: editUser.inputs.name.value,
      password: editUser.inputs.password.value,
      email: editUser.inputs.email.value,
    };
    if (!parsed.name || !parsed.password || !parsed.email) return;

    try {
      editUserByPayload(
        {
          name: editUser.inputs.name.getAttribute("data-name"),
          email: editUser.inputs.email.getAttribute("data-email"),
          password: editUser.inputs.password.getAttribute("data-password"),
        },
        parsed
      );
      editUser.form.reset();
      notifier().notify("success", "User Edited!");
    } catch (err) {
      notifier().notify("error", "An error ocurred while editing the user");
      console.log(err);
    }
  });
});
