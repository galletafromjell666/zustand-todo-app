import useToDo from "../hooks/useToDo"
export const Card = () => {
    const {todos} = useToDo()
  return (
    <div>Card
        {todos && JSON.stringify(todos)}
    </div>
  )
}
