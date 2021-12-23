let objects = [
    {id : 1, name : 'spiderman'},
    {id : 2, name : 'doctor-strange'},
    {id : 3, name : 'hulk'}
];

const result = objects.filter((item,index) => index > 0);
console.log(result);