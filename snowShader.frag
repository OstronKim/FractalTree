#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_resolution; 
uniform float u_time;

//Based on explanation from TheBookOfShaders
float snowflake(vec2 center, float radius, vec2 _st)
{
  //Increase first parameter in smoothstep to decrease bluriness of flake
    return 1.0 - sqrt(smoothstep(0.002, radius, length(_st - center)));
}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy; 
  vec2 c = vec2(0.5,0.6);
  
  vec3 color = vec3(snowflake(c,0.009,st));

  //gl_FragColor = vec4(0.0,0.0,0.0,1.0);
  gl_FragColor = vec4(color,1.0); 
}