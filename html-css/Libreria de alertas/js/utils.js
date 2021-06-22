const selector = (slctor) => document.querySelector(slctor);

function storage() {
  let id = 0;
  const store = {};
  const PADDING_PER_ELEMENT = 80;
  return () => ({
    id,
    add(alert) {
      store[id++] = alert;
    },
    getAll() {
      return store;
    },
    get(_id) {
      return store[_id];
    },
    delete(_id) {
      const aux = this.get(_id);
      const alertBefore = document.querySelector(
        `.alert[data-id="${parseInt(_id) + 1}"]`
      );
      if (alertBefore !== null) {
        const { y } = aux.getBoundingClientRect();
        alertBefore.style.top = `${y}px`;
      } else {
        aux.style.top = "1rem";
      }

      delete store[id--];
      return aux;
    },
    totalHeight() {
      if (!Object.keys(store).length) return 0;
      const values = Object.values(store).map((alert) => {
        const { y } = alert.getBoundingClientRect();
        return y + PADDING_PER_ELEMENT;
      });
      return values[values.length - 1];
    },
  });
}

/**
 *
 * @param {HTMLElement} nodeName The name of the node tag
 * @param {String} text The inner text of the tag
 * @param {Object} props The html properties of the tag
 * @param {Object} jsProps The javascript properties for the tag
 * @returns HTMLElement The HTML node
 */
function element(nodeName, text = "", props = [], jsProps = []) {
  const node = document.createElement(nodeName);
  for (const [p, v] of Object.entries(props)) node.setAttribute(p, v);
  for (const [p, v] of Object.entries(jsProps)) node[p] = v;
  if (text) node.innerHTML = text;
  node.addChilds = (...childs) => {
    for (const child of childs) {
      node.append(child);
    }
  };
  return node;
}

/**
 *
 * @param  {Array | NodeList} classnames The class names for merge
 * @returns String The class group separate them for a space
 */

function cls(...classnames) {
  const tpl = [];
  if (!classnames.length) return "";
  for (const clss of classnames) {
    if (typeof clss === "string" && !!clss) {
      tpl.push(clss);
    }
  }

  return tpl.join(" ");
}

export { storage, element, cls };
