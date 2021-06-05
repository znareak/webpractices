import {
  getId,
  selector,
  toggleVisibility,
  toggleModal,
  loadUsersInTable,
  addRowInTable,
  saveUser,
} from "../helpers/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const tableUsers = getId("table-users");
  const [containerAdd, containerEdit] = selector(".container-overlay");
  const btnsClose = selector(".close-container");
  const addUser = {
    form: getId("add-user-form"),
    btnAdd: getId("add-user"),
    btnSubmit: getId("submit"),
    errorEmail: getId("error-email"),
    email: getId("email"),
  };
  const editUser = {
    form: getId("edit-user-form"),
    btnSubmit: getId("submit-edit"),
    errorEmail: getId("error-email-edit"),
    email: getId("email-edit"),
  };

  loadUsersInTable(tableUsers, containerEdit);
  toggleModal(addUser.btnAdd, containerAdd);
  toggleModal(containerAdd.querySelector(".close-container"), containerAdd);
  toggleModal(containerEdit.querySelector(".close-container"), containerEdit);

  addUser.form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    saveUser(user);
    addRowInTable({
      user,
      tableUsers,
      containerEdit
    });
    e.target.reset();
    toggleVisibility(containerAdd);
  });
});
