var n = 0;
var data = '[';

while(!!(data.length <= parseInt('0x17', 16))){
    data = `${data}${n},`;
    n = -~n;
}

data = JSON.parse(`${data.substring(0, data.length-1)}]`);

for(i=+[]; i<n; i=-~i) console.log(data[i]);
