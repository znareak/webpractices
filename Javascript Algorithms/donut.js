//https://www.a1k0n.net/2011/07/20/donut-math.html

const sin = Math.sin;
const cos = Math.cos;

let A = 0, B = 0;
const renderDonut = () => {
    const b = [];
    const z = [];
    for (let k = 0; k < 1760; k++) {
        b[k] = ' ';
        z[k] = 0;
    }

    for (let j = 0; j < 6.28; j += 0.07) {
        for (let i = 0; i < 6.28; i += 0.02) {
            const c = sin(i),
                  d = cos(j),
                  e = sin(A),
                  f = sin(j),
                  g = cos(A),
                  h = d + 2,
                  D = 1 / (c * h * e + f * g + 5),
                  l = cos(i),
                  m = cos(B),
                  n = sin(B),
                  t = c * h * g - f * e;

            const x = Math.floor(40 + 30 * D * (l * h * m - t * n));
            const y = Math.floor(12 + 15 * D * (l * h * n + t * m));
            const o = x + 80 * y;
            const N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));

            if (y > 0 && y < 22 && x > 0 && x < 80 && D > z[o]) {
                z[o] = D;
                b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
            }
        }
    }

    console.clear();
    let output = '';
    for (let k = 0; k < 1760; k++) {
        output += k % 80 ? b[k] : '\n';
    }
    console.log(output);

    A += 0.04;
    B += 0.02;
};

setInterval(renderDonut, 120);


/*
A = B = 0;
setInterval(() => {
    b = Array(1760).fill(" "), z = Array(1760).fill(0);
    for (j = 0; j < 6.28; j += 0.07)
        for (i = 0; i < 6.28; i += 0.02) {
            c = Math.sin(i), d = Math.cos(j), e = Math.sin(A), f = Math.sin(j),
            g = Math.cos(A), D = 1 / (c * (d + 2) * e + f * g + 5),
            l = Math.cos(i), m = Math.cos(B), n = Math.sin(B), t = c * (d + 2) * g - f * e,
            x = 40 + 30 * D * (l * (d + 2) * m - t * n) | 0,
            y = 12 + 15 * D * (l * (d + 2) * n + t * m) | 0,
            o = x + 80 * y, N = 8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n) | 0;
            if (y > 0 && y < 22 && x > 0 && x < 80 && D > z[o]) z[o] = D, b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
        }
    console.clear();
    console.log(b.join("").replace(/(.{80})/g, "$1\n"));
    A += 0.04;
    B += 0.02;
}, 120);
*/
