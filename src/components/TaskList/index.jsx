import { useEffect, useState } from "react"
import { Fragment } from "react/cjs/react.production.min"
import { BsX } from "react-icons/bs";

import { List } from "../List";

import { Container, Task } from "./style"
export function TaskList({props}){

    // Pega a tarefa no inpunt
    const [newTaskTitle, setNewTaskTitle] = useState('')
    // Array com todas as Tarefas em geral 
    const [task, setTask] = useState([])

    const [id, setId] = useState(1)

    const [all , setAll] = useState(true);
    const [completed, setCompleted] = useState(false)
    const [active, setActive] = useState(false)

    

   //  Cria uma nova Tarefa 
    function handleCreateNewTask(){
        setId(Math.floor(Math.random()* 1000))

        if(newTaskTitle === undefined || newTaskTitle === null || newTaskTitle ===''){
            alert('Digite Sua Tarefa')
            return false
        }


        const itemLists = ()=>{
            return {
                id: id,
                title: newTaskTitle,
                isComplete: false
            }
        }

        var taskNew = [...task]

        taskNew.push(itemLists())

        setTask(taskNew)
        setNewTaskTitle('')
    }

   //  Finaliza uma  Tarefa 
     function handleToggleTaskCompletion(id){
         let selectedTask = task.filter((tas)=>{
             return tas.id === id
         })

         if(selectedTask[0].isComplete === false){
             selectedTask[0].isComplete = true
         }else{
            selectedTask[0].isComplete = false
         }

         

         
         setTask([...task])
         console.log(task)
     }

   //  Cria uma nova Tarefa  Remove uma Tarefa
     function removeTask(id){
        task.filter((t,i) =>{ 
       
       
            if(t.id === id)   {
               task.splice(i, 1);
               setTask([...task])
            } 
    
        });
     }


    

  
   

     
   return(
      <Fragment>
           <Container>
             <div>  <h1>TODO</h1>   <a> light</a> </div>

             <input type="text" value={newTaskTitle}  onChange={(event) => setNewTaskTitle(event.target.value)} 
             onKeyUp={(event) => {
                  if( event.key === "Enter" ){  
                    handleCreateNewTask()
                  } else{
                       return false
                  }    
                    
             }}  placeholder="Criar a sua nova tarefa"/>
       </Container>

       <Task>
           <ul>
             {
                 all === true ? 
                 < List task={task} handleToggleTaskCompletion={handleToggleTaskCompletion} removeTask={removeTask}/>
                 : completed === true ? 
                 <List task={task.filter((tarefa)=> { return  tarefa.isComplete === true; })} handleToggleTaskCompletion={handleToggleTaskCompletion} removeTask={removeTask}/>
                 : active === true ? 
                 <List task={task.filter((tarefa)=> { return tarefa.isComplete === false})} handleToggleTaskCompletion={handleToggleTaskCompletion} removeTask={removeTask}/>:
                 <List task={task} handleToggleTaskCompletion={handleToggleTaskCompletion}  removeTask={removeTask}/>

             }

               <li className="funcionalidades"> 
                   <span> {task.length} itens </span>  
                    <a  onClick={()=> setAll(true) }> Todos </a>

                    <a onClick={()=> {
                        setAll(false)
                        setActive(true)     
                        } } > Ativos </a>
                    <a onClick={()=> {
                         setActive(false)
                         setCompleted(true) 
                        
                    }}> Completos</a>   
                    <a > Limpar Completos</a>   
                </li>
           </ul>
       </Task>
      </Fragment>
   )

}