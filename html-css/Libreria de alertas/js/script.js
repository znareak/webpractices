import { storage, element, cls } from "./utils.js";
const mo = document.getElementById("mostrar");

class Libalert {
  constructor() {
    this.storage = storage();
    this.types = ["success", "danger", "primary", "warning"];
  }

  get createContainer() {
    const container = element("div", null, { id: "alerts" });
    document.body.appendChild(container);
    return container;
  }

  isValidType(type) {
    return this.types.includes(type);
  }

  createAlert({ type, title, message }) {
    const typeAlert = this.isValidType(type) ? `alert-${type}` : null;
    const containerAlert = element("div", null, {
      class: cls("alert", typeAlert),
      "data-id": this.storage().id,
    });

    const icon = element("img", null, {
      src: "img/info.svg",
      class: "alert-icon",
    });
    const close = element("img", null, {
      src: "img/close.svg",
      class: "alert-close",
    });
    close.addEventListener("click", (e) => {
      containerAlert.classList.remove("alert-open");
      this.storage().delete(containerAlert.getAttribute("data-id"));
      setTimeout(() => containerAlert.remove(), 200);
    });
    const titleAlert = element("h4", title, { class: "alert-title" });
    const content = element("p", message, { class: "alert-content" });
    containerAlert.addChilds(icon, close, titleAlert, content);
    return containerAlert;
  }

  show(props) {
    const alert = this.createAlert(props);
    const totalHeightAlerts = this.storage().totalHeight();
    console.log(this.storage().getAll());
    document.body.appendChild(alert);

    if (totalHeightAlerts > 0) {
      alert.style.top = `${totalHeightAlerts}px`;
    }

    alert.classList.add("alert-open");
    this.storage().add(alert);
    document.body.appendChild(alert);
  }
}

const alerta = new Libalert();

mo.addEventListener("click", () => {
  alerta.show({
    message: "Probando una alerta sencilla",
    title: "Un titulo aqui",
  });
});
