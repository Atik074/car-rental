import { Button } from "@nextui-org/react";




export default  async function App (){
  const res =  await fetch('https://jsonplaceholder.typicode.com/todos/1') 
  const data = await res.json() 

    console.log(data)
  return (
     <div>
           <i className="text-red-700  m-6">{data.title}</i>
           <Button>Click</Button>
     </div>
  );
}