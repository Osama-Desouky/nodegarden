"use strict";!function(){function a(){r=window.innerWidth*m,o=window.innerHeight*m,e=r*o,d.length=Math.sqrt(e)/25|0,h.width=r,h.height=o;var a,t;for(a=0,t=d.length;t>a;a++)d[a]||(d[a]={x:Math.random()*r,y:Math.random()*o,vx:1*Math.random()-.5,vy:1*Math.random()-.5,m:1.5*Math.random()+1,pos:Math.random()>=.5})}function t(a){var t={x:a.pageX,y:a.pageY},n=d[Math.floor(Math.random()*(d.length-1))];n.x=t.x,n.y=t.y,n.vx=0,n.vy=0,n.m=1.5*Math.random()+1}function n(){var a,t,e,m,h,y,M,v,x,s;for(requestAnimationFrame(n),i.clearRect(0,0,r,o),y=0,s=d.length-1;s>y;y++)for(M=y+1;s+1>M;M++){if(v=d[y],x=d[M],m=x.x-v.x,h=x.y-v.y,a=Math.sqrt(Math.pow(m,2)+Math.pow(h,2)),a<v.m/2+x.m/2){if(v.m<=x.m){v.x=Math.random()*r,v.y=Math.random()*o,v.vx=1*Math.random()-.5,v.vy=1*Math.random()-.5,v.m=1.5*Math.random()+1;continue}if(x.m<=v.m){x.x=Math.random()*r,x.y=Math.random()*o,x.vx=1*Math.random()-.5,x.vy=1*Math.random()-.5,x.m=1.5*Math.random()+1;continue}}t={x:m/a,y:h/a},e=2*(v.m*x.m)/Math.pow(a,2);var l=200*e;if(!(.05>l)){var c=v.pos===x.pos?-1:1;i.beginPath(),1===c?i.strokeStyle="rgba(191,63,31,"+(1>l?l:1)+")":i.strokeStyle="rgba(31,63,191,"+(1>l?l:1)+")",i.moveTo(v.x,v.y),i.lineTo(x.x,x.y),i.stroke();var g=e*t.x/v.m,f=e*t.x/v.m,w=e*t.y/x.m,p=e*t.y/x.m;v.vx+=c*g,v.vy+=c*w,x.vx-=c*f,x.vy-=c*p}}for(y=0,s=d.length;s>y;y++)i.beginPath(),i.arc(d[y].x,d[y].y,d[y].m,0,2*Math.PI),i.fill(),d[y].x+=d[y].vx,d[y].y+=d[y].vy,(d[y].x>r+25||d[y].x<-25||d[y].y>o+25||d[y].y<-25)&&(d[y].x=Math.random()*r,d[y].y=Math.random()*o,d[y].vx=1*Math.random()-.5,d[y].vy=1*Math.random()-.5)}var r,o,e,m=window.devicePixelRatio,d=new Array(Math.sqrt(e)/10|0),h=document.createElement("canvas"),i=h.getContext("2d"),y=document.getElementById("container");1!==m&&(h.style.transform="scale("+1/m+")",h.style.transformOrigin="0 0"),h.id="nodegarden",y.appendChild(h),a(),n(),window.addEventListener("resize",a),window.addEventListener("click",t)}();