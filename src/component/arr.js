import React from "react";

function Arr () {

    const MyArray1=['Ri ',' Pri ','Rishu','Prin'];
    const MyArray=['Ri ',' Pri ',' Rishu ','Prin'];
    const newArray1=[' con1 ',' con2 ',' con3 '];
    const newArray2=[' can4 ',' can5 ',' can6 '];
    const findArray=['Ri ',' Pri ',' Rishu ','Prin'];
    const incArray= MyArray1.includes ('Rishu');
    // console.log(incArray);
    // const newArray3=[MyArray.concat(newArray1, newArray2)];
    // console.log(MyArray.pop());
    const arr3 = [
        {
            age:10,name:'New_Ri', 
        },
        {
            age:21,name:'Pri', 
        },
        {
            age:3,name:'Rishu', 
        }
]


const arr4 = arr3.filter(user =>user.age>=3);
console.log(arr4);
   

    return (
       <div><h2 style={{color:'blue'}}>&nbsp;&nbsp;&nbsp; &nbsp;Original Array :::: {MyArray1}</h2><br/><br/> 
       
       <div><h4>1. <u>Using Pop method </u>: Pop out item is : {MyArray.pop()}</h4></div>
       <div><h4>2. <u>Using Push method </u>: Push item is :{MyArray.push('New item1')} ::::::: {MyArray}</h4></div>
       <div><h4>3. <u>Using Reverse method </u>: After reverse Array is : {MyArray.reverse()} </h4><br/> &nbsp; &nbsp;&nbsp;&nbsp;
       <h2 style={{color:'green'}}>Modified Array :::{MyArray} </h2><br/>&nbsp; &nbsp;&nbsp;&nbsp;
       <h2 style={{color:'green'}}>Re-Modified to the Original Array :::{MyArray.reverse()}</h2></div>
       
       <div><h4>4. <u>Using Shift method </u>: Shift item is : {MyArray.shift()} :::: Modified Array is ::{MyArray} </h4></div>
       <div><h4>5. <u>Using UnShift method </u>: Unshift item is : {MyArray.unshift('Ri_new')} :::: Modified Array is ::{MyArray}</h4> </div>
       
       <div><h4>6. <u>Using indexOf method </u>: IndexOf Pri: {MyArray.indexOf(' Pri ')} </h4> <br/> &nbsp; &nbsp;&nbsp;&nbsp; 
       IndexOf Ri: {MyArray.indexOf(' Ri ')} <br/> &nbsp; &nbsp;&nbsp;&nbsp; 
       IndexOf Rishu, starting position 1 : {MyArray.indexOf(' Rishu ',2)} <br/> &nbsp; &nbsp;&nbsp;&nbsp;
       IndexOf Rishu, from ending position -2 : {MyArray.indexOf(' Rishu ',-2)} </div>

       <div><h4>8. <u>Using lastIndexOf method </u>: lastIndexOf Pri: {MyArray.lastIndexOf(' Pri ')} </h4></div>
       <div><h4>9. <u>Using join method </u>: join: {MyArray.join(' , ')} </h4></div>
       <div><h4>10. <u>Using slice method </u>: {MyArray.slice(1,3)} </h4></div>
       <div><h4>11. <u>Using toString method </u>: {MyArray.toString()} </h4></div>
       <div><h4>12. <u>Using map method </u>: {arr3.map((user)=>(
         <div>{user.name} </div>))}</h4></div>
       <div><h4>13. <u>Using Filter method </u>: {arr4.map(filteredName =>(
        <l1>
            {filteredName.name}
        </l1>
       ))}</h4></div>

        {/* <div>14. <u>Using reduce method </u>:  */}
        {/* <div>< Total age = {arr5.age} /></div></div> */}
       
       <div>14. <u>Using copyWithin method </u>:  {MyArray.copyWithin(1,2)} </div>
       <div>15. <u>Using Concat method </u>: Concat item is : {MyArray.concat(newArray1, newArray2)}  </div>
       {/* <div>13. <u>Using fill method </u>:  {MyArray.fill('hello', 2,3)} </div> */}

       
       {/* :::: Modified Array is ::{newArray3} */}
       

        <div>16. <u>Using includes method </u>: Is item included  : {MyArray1.includes('Ri')} </div>
       {/* <div>7. <u>Using find method </u>: Find item is : {MyArray.find(Arr(element){
                return element =='Rishu'})
                }  </div> */}
        
       </div>

    )
}

export default Arr;