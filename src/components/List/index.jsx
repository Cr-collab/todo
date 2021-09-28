import { Container } from "./style"
import { BsX } from "react-icons/bs";


export function List({task,  handleToggleTaskCompletion, removeTask}){
  return(
   task.map((tarefa)=>{
     return(
      <Container  key={tarefa.id}>
      <label > <input type="checkbox" onChange={(event) =>{
              handleToggleTaskCompletion(tarefa.id)
      }} /> <p>{tarefa.title}</p>  <a  onClick={()=>{ return removeTask(tarefa.id)}}  className="Close"> <BsX size="20" /></a>
      </label>
      </Container>
     )
   })
  )
}