#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_resolution; 
uniform float u_time;

const float num_flakes = 200.0;

//Based on explanation from TheBookOfShaders
float snowflake(vec2 center, float radius, vec2 _st)
{
    return 1.0 - smoothstep(0.00, radius, length(_st - center));
}
//Simple pseudorandom function. 
// From https://stackoverflow.com/questions/4200224/random-noise-functions-for-glsl
//Slightly modified
float rand(float seed)
{
    return fract(sin(dot(vec2(seed,47.57384/seed), vec2(12.9898, 78.233)))* (43758.5453));
}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  vec3 color = vec3(0.0);

  for(float i = 1.0; i <= num_flakes; i++){

    //Randomize size of flakes
    float size = 0.005 + 0.01*rand(sin(i))*sin(i/num_flakes);
    //random y-speed. Dependent on flake size
    float y_speed = size*25.;

    //Update the x and y position every frame
    vec2 center = vec2(0.0);
    center.x = -0.3 + rand(i) * 1.4 + 0.1*cos(u_time+sin(i));
    center.y = fract(sin(i) - y_speed * u_time);

    color += vec3(snowflake(center,size,st));
  }

  gl_FragColor = vec4(color,1.0); 
}