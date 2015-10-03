void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    float bpm = 4.935;
    
	vec2 uv = vec2( fragCoord.xy - 0.*iResolution.xy );
    uv = 30. * uv.xy/iResolution.y;
    uv.x -= 12. * ((sin(abs(sin(iGlobalTime/1.) * 5.) * uv.y * 50.) + 15.) / 15.);
    
    vec2 pos = vec2(15.)-uv;
    float r = length(pos)*2.0;
    float a = atan(pos.y,pos.x);
    
    float f = 2.;
    vec3 ring1 = vec3(1.-smoothstep(f,f+0.1,r) - (1.-smoothstep(f-0.1,f,r)));
    f = 6.-ceil(abs(pow(cos(a),2.)*2.)*2.);
    vec3 ring2 = vec3(1.-smoothstep(f,f+0.2,r) - (1.-smoothstep(f-0.2,f,r)));
    f = 6.+ceil(abs(pow(cos(a),2.)*2.)*2.);
    vec3 ring3 = vec3(1.-smoothstep(f,f+.3,r) - (1.-smoothstep(f-.3,f,r)));
    f = 7.+ceil(abs(pow(cos(a),2.)*2.)*2.) + abs(tan(a));
    vec3 ring4 = vec3(1.-smoothstep(f,f+.4,r) - (1.-smoothstep(f-.4,f,r)));
    f = 8.+ceil(abs(pow(cos(a),2.)*2.)*2.) + abs(tan(a)) + abs(tan(a+3.1459/2.));
    vec3 ring5 = vec3(1.-smoothstep(f,f+.5,r) - (1.-smoothstep(f-.5,f,r)));
    f = 8.-ceil(abs(cos(a)*2.)*2.)+min(ceil(abs(tan(a)*0.3)),6.);
    vec3 ring6 = vec3(1.-smoothstep(f,f+.6,r) - (1.-smoothstep(f-.6,f,r)));
    f = 10.+ceil(abs(pow(cos(a),2.)*2.)*2.)+abs(tan(a))+abs(tan(a+3.1459/2.))+abs(tan(a*8.));
    vec3 ring7 = vec3(1.-smoothstep(f,f+3.25,r) - (1.-smoothstep(f-3.25,f,r)));
    
    vec3 color = ring1 + ring2 + ring3 + ring4 + ring5 + ring6 + ring7;
    color *= vec3(abs(sin(iGlobalTime * bpm + r/(20.))) * 2., abs(cos(iGlobalTime/2. + r)), abs(log(sin(iGlobalTime + r))));
    color = pow(color, vec3(abs(sin(iGlobalTime * bpm))) * 5.);
    fragColor = vec4(color, 1.0);
}