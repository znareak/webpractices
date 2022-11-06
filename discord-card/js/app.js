import { uuidv4, imageToBase64 } from "./utils.js";

window.addEventListener("DOMContentLoaded", () => {
  class DiscordCard extends HTMLElement {
    constructor() {
      super();
      this._id = uuidv4();
    }

    connectedCallback() {
      this.render();

      const header = document.getElementById("cover-" + this._id);
      const profile = document.getElementById("profile-" + this._id);
      const inputCoverpage = document.getElementById("file-cover-" + this._id);
      const inputProfile = document.getElementById("file-profile-" + this._id);

      header.addEventListener("click", () => {
        const inputCoverpage = document.getElementById(
          "file-cover-" + this._id
        );
        inputCoverpage.click();
      });

      profile.addEventListener("click", () => {
        inputProfile.click();
      });

      inputCoverpage.addEventListener("change", async (e) => {
        try {
          const file = e.target.files[0];
          const url = await imageToBase64(file);
          header.style.backgroundImage = `url("${url}")`;
        } catch (err) {
          console.err(err.message);
        }
      });
      inputProfile.addEventListener("change", async (e) => {
        try {
          const file = e.target.files[0];
          const url = await imageToBase64(file);
          profile.querySelector(".card-avatar").src = url;
        } catch (err) {
          console.err(err.message);
        }
      });
    }

    getAttr(attr) {
      const value = this.attributes[attr]?.value || null;
      return value;
    }

    getAttrs() {
      const attrs = Object.values(this.attributes).reduce(
        (acc, current) => ({ ...acc, [current.name]: current.value }),
        {}
      );
      return attrs;
    }

    disconnectedCallback() {
      console.log("The element removed from DOM correctly");
    }

    render() {
      const { username, id, bio } = this.getAttrs();

      this.innerHTML = /*html*/ `
      <div class="card">
        <header class="card-coverpage" id="cover-${this._id}">
          <input type="file" accept="image/*" style="display:none;" id="file-cover-${this._id}"/>
          <p>Cambiar Cartel</p>
        </header>

        <div class="card-body">
          <div class="card-profile" id="profile-${this._id}">
            <input type="file" accept="image/*" style="display:none;" id="file-profile-${this._id}"/>
            <div class="card-profile-img">
              <div class="card-change-profile">
                <img src="./assets/changeImg.svg" alt="" class="card-change" />
              </div>
              <img
                src="https://avatars.githubusercontent.com/u/22780669?v=4"
                alt="zNareak Profile"
                title="zNareak Profile"
                class="card-avatar"
              />
              <div class="card-profile-status">
                <svg>
                  <mask
                    id="svg-mask-status-dnd"
                    maskContentUnits="objectBoundingBox"
                    viewBox="0 0 1 1"
                  >
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <rect
                      fill="black"
                      x="0.125"
                      y="0.375"
                      width="0.75"
                      height="0.25"
                      rx="0.125"
                      ry="0.125"
                    ></rect>
                  </mask>
                  <rect
                    height="100%"
                    width="100%"
                    fill="hsl(359, calc(var(1, 1) * 82.6%), 59.4%)"
                    mask="url(#svg-mask-status-dnd)"
                  ></rect>
                </svg>
              </div>
            </div>
          </div>

          <div class="card-nitro">
            <img
              alt="Hyper"
              aria-hidden="true"
              src="./assets/hyper.svg"
              class=""
            />
            <img
              alt="Discord Nitro"
              aria-hidden="true"
              src="./assets/nitro.svg"
              class=""
            />
          </div>

          <div class="card-content">
            <p class="card-username" data-id="${id}">${username}</p>

            <div class="card-divider"></div>

            <p class="card-about">Sobre mi</p>
            <p class="card-about-content">
              ${bio}
            </p>
          </div>
        </div>
    </div>`;
    }
  }

  window.customElements.define("discord-card", DiscordCard);
});
