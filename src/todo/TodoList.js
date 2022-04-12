import React from 'react';

function TodoList({todosList, setTodosList, ...props}) {

  const [checked, setChecked] = React.useState(true);

  const handleChange2 = (todo) => {
    setTodosList(todosList.filter(el => {
      if (el.id === todo.id) {
        console.log({...el, completed: !el.completed})
        return {...el, completed: !el.completed}
      }
    }))
  };
  const handleChange = (todo) => {
    const changeCompleted = todosList.map(item =>
      (item.id === todo.id ? {...item, completed: !item.completed} : item))
    console.log(changeCompleted)
    setTodosList(changeCompleted)
  }
  const handleDelete = (todo) => {
    setTodosList(state => state.filter(el => el.id !== todo.id))
  }

  return (
    <>
      {todosList.map(todo => (
        <li className="list-group-item" key={todo.id}>
          <div style={{background: todo.color}} className={`todo-indicator`}/>
          <div className="widget-content p-0 ">
            <div className="widget-content-wrapper">
              <div className="widget-content-left mr-2">
                <div className="custom-checkbox custom-control">
                  <input checked={todo.completed} onChange={() => handleChange(todo)}
                         className="custom-control-input" id="1" type="checkbox"/>
                  <label className="custom-control-label" htmlFor="1">&nbsp;</label>
                </div>
              </div>
              <div className="widget-content-left">
                <div className="widget-heading">
                  {todo.completed ? <del>{todo.todo}</del> : todo.todo}

                  {/*<div className="badge badge-danger ml-2">Rejected</div>*/}
                </div>
                <div className="widget-subheading"><i>{todo.date}</i></div>
              </div>
              <div className="widget-content-right">

                <button onClick={() => handleChange(todo)} className="border-0 btn-transition btn btn-outline-success">
                  <i className="fa fa-check"/>
                </button>
                <button onClick={() => handleDelete(todo)} className="border-0 btn-transition btn btn-outline-danger">
                  <i className="fa fa-trash"/>
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}

    </>
  );
}

export default TodoList;