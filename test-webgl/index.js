
import vert from '!raw-loader!./vertex.glsl';
import frag from '!raw-loader!./fragment.glsl';


const c = document.getElementById("c");

c.width = 600;
c.height = 600;

const gl = c.getContext("webgl");
console.log("Init done");




 var vertices = [-0.5, 0.5, -0.5, -0.5, 0.0, -0.5,];

 var vertex_buffer = gl.createBuffer();
 gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
 gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


 let vertSh = gl.createShader(gl.VERTEX_SHADER);
 gl.shaderSource(vertSh, vert);
 gl.compileShader(vertSh);

 let fragSh = gl.createShader(gl.FRAGMENT_SHADER);
 gl.shaderSource(fragSh, frag);
 gl.compileShader(fragSh);

 let prog = gl.createProgram();
 gl.attachShader(prog, vertSh);
 gl.attachShader(prog, fragSh);
 gl.linkProgram(prog);
 gl.useProgram(prog);

let iter = gl.getUniformLocation(prog, "iter");

let coord = gl.getAttribLocation(prog, "coords");
gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(coord);

gl.viewport(0,0,c.width,c.height);


console.log(iter)
let i = 0;

let lp = () => {
    i+=0.001;

    if ( i >= 1){
        i = 0;
    }

    console.log(i);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(iter, i, 0);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    window.requestAnimationFrame(() => lp());
}

lp();