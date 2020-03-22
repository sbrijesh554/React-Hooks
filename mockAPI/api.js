const students = [
    {id: 101, name: "Mr A"},
    {id: 102, name: "Mr B"},
    {id: 103, name: "Mr C"},
    {id: 104, name: "Mr D"},
    {id: 105, name: "Mr E"},
]

const getStudentName = function(id){
    //add some delay for side effects
    var promise = new Promise((resolve, reject)=>{
        setTimeout(function(){
            const studentData = students.find((data)=>data.id === id);
            resolve(studentData);
        },1000);
    });
    return promise;
}

export default getStudentName;