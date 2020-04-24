
attribute vec2 coords;
uniform vec2 iter;

void main (void) {
    gl_Position = vec4(coords + iter, 0.0, 1.0);
}