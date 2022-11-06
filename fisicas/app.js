function makeNode(type, props, listeners, ...children) {
  const node = document.createElement(type);
  for (const [key, value] of Object.entries(props)) {
    node[key] = value;
  }
  if (Array.isArray(listeners)) {
    for (const listener of listeners) {
      node.addEventListener(listener.event, listener.listener);
    }
  }
  node.append(...(children || []));
  return node;
}

class Circle {
  constructor({
    id = null,
    color = null,
    border = null,
    x = 0,
    y = 0,
    r = 0,
    ...args
  }) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.border = border;
    this.node = null;
    this.args = args || {};
  }

  add(...children) {
    const element = makeNode(
      "div",
      {
        id: this.id,
        className: `circle${
          this.args.className ? " " + this.args.className : ""
        }`,
      },
      null,
      ...(children || [])
    );
    if (this.y) element.style.top = this.y;
    if (this.x) element.style.left = this.x;
    if (this.color) element.style.backgroundColor = this.color;
    if (this.border) {
      element.style.border = `${this.border.width}px ${this.border.style} ${this.border.color}`;
    }

    element.style.cssText = `width:${this.r}px; height:${this.r}px;`;
    document.body.appendChild(element);
    this.node = element;
    return element;
  }

  getNodeCoords() {
    if (!this.node) {
      throw new ReferenceError("The node must be added to DOM first");
    }
    return this.node.getClientRects()[0];
  }

  on(event, listener) {
    if (!this.node) {
      throw new ReferenceError("The node must be added to DOM first");
    }

    this.node.addEventListener(event, (e) => listener(e, this));
    return this.node;
  }
}

const c1 = new Circle({ id: "target", r: 200 });
const c2 = new Circle({ id: "circle", r: 50 });

const target = c1.add();
const cursor = c2.add(
  makeNode("span", { className: "x" }),
  makeNode("span", { className: "y" })
);

const xNode = cursor.querySelector(".x");
const yNode = cursor.querySelector(".y");

function getCoords(e) {
  let x = e.pageX - c2.r / 2;
  let y = e.pageY - c2.r / 2;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  xNode.textContent = x;
  yNode.textContent = y;
  const colision = checkIntersection(
    c1.getNodeCoords().x,
    c1.getNodeCoords().y,
    c2.getNodeCoords().x,
    c2.getNodeCoords().y,
    c1.r,
    c2.r
  );

  if (colision) {
    console.log("Los circulos colisionan");
    c2.node.style.borderColor = "red";
  } else {
    c2.node.style.borderColor = "black";
  }
}

function checkIntersection(x1, y1, x2, y2, r1, r2) {
  const magnitud = Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2);
  const distancia = Math.sqrt(magnitud);
  console.log(distancia.toFixed(2));
  return distancia < r1 + r2 + 4;
}

document.addEventListener("mousemove", getCoords);

document.addEventListener("mouseleave", getCoords);
