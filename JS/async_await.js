const task1 = ()=>{
     return new Promise((resolve)=>{
          setTimeout(() => {
               resolve('Task-1 completed')
          }, 1000);
     })
}
const task2 = ()=>{
     return new Promise((resolve)=>{
          setTimeout(() => {
               resolve('Task-2 completed')
          }, 2000);
     })
}
const task3 = ()=>{
     return new Promise((resolve)=>{
          setTimeout(() => {
               resolve('Task-3 completed')
          }, 3000);
     })
}

async function runTasks() {
     const result1 = await task1();
     console.log(result1)

     const result2 = await task2();
     console.log(result2);

     const result3 = await task3();
     console.log(result3)
}

runTasks()