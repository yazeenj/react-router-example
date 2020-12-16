function Todos({ todosData }) {
  return (
    <div>
      <h3>TodoList:</h3>
      {todosData.map(function (todo) {
        return <p>{todo}</p>;
      })}
    </div>
  );
}

export default Todos;
