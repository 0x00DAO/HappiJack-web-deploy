class c{static uuidGen(o,r){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),a=[];let t;if(r=r||e.length,o)for(t=0;t<o;t++)a[t]=e[0|Math.random()*r];else{let n;for(a[8]=a[13]=a[18]=a[23]="-",a[14]="4",t=0;t<36;t++)a[t]||(n=0|Math.random()*16,a[t]=e[t===19?n&3|8:n])}return a.join("")}static generateRandomNumber(o,r){const e=Math.random()*(r-o)+o;return Math.floor(e)}}export{c as M};
