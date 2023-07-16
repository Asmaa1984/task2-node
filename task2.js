const fs = require("fs");
const obj = (id , fName , lName , age , city)=>{
    return({id:id , fName:fName,lName : lName ,age: age, city :city}) 
};
const list = [["Asmaa","Mostafa",38,"El-Sharkia"],["Essam","Ahmed",41,"Ismailia"],["Naglaa","Mahmoud",33,"Aswan"],["Seham","Adel",38,"Monufia"],["Khloud","Ali",23,"Mansoura"],["Waleed","Adel",45,"Giza"],["Abeer","Mohamed",25,"Cairo"]]
const persons = list.map((li , index)=>{
    const ob = obj(index+1,li[0],li[1],li[2],li[3])
    return ob
})
console.log(persons)
const deleteId = [4,6];
function DeletedId(id , object1){
    const index1 = object1.findIndex(obj => obj.id === id);
    object1.splice(index1 , 1)

}
deleteId.forEach((id)=>{
    DeletedId(id , persons);
})
console.log(persons)
const person2 = persons.map((person)=>{
    const ob = {fName:person.fName,lName:person.lName,city:person.city}
    return ob
})
console.log(person2);
const person5 = persons[4]
console.log(person5);
function createFile(fileName , list ){
    const listJSON = JSON.stringify(list);
    fs.writeFileSync(fileName , listJSON);
    console.log("file is created")};
function fileRead(fileName){
    const fileContent = fs.readFileSync(fileName , "utf-8");
    return JSON.parse(fileContent)};
