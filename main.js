var n = undefined;
var data = '[';

while(!!(data.length < parseInt('0x17', 16))){
    n = -~n;
    data = `${data}${n},`;
}

data = JSON.parse(`${data.substring(0, data.length-1)}]`);

for(i=+[]; i<n; i=-~i) console.log(data[i]);
