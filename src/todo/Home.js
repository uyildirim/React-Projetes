import "../todo.css"
import TodoList from "./TodoList";
import Footer from "./Footer";
import Header from "./Header";
import TodoModal from "./TodoModal";
import {useState} from "react";

function Home(props) {
  const [showModal, setShowModal] = useState(false);
  const [todo, setTodo] = useState()

  const [todosList, setTodosList] = useState([
    {id: 1, todo: "React Learning", completed: true, color: "red", date: "2020-01-01"},
    {id: 2, todo: "Vue Learning", completed: false, color: "yellow", date: "2020-02-01"},
    {id: 3, todo: "Angular Learning", completed: false, color: "green", date: "2020-03-01"},
    {id: 4, todo: "React Native Learning", completed: false, color: "blue", date: "2020-04-01"},


  ])


  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <div className="row d-flex justify-content-center container">
      <div className="col-md-8">
        <div className="card-hover-shadow-2x mb-3 card">
          <Header title={"Task Lists"}/>
          <div className="scroll-area-sm">
            <perfect-scrollbar className="ps-show-limits">
              <div style={{position: "static"}} className="ps ps--active-y">
                <div className="ps-content">
                  <ul className=" list-group list-group-flush">

                    <TodoList setTodosList={setTodosList} todosList={todosList}/>

                  </ul>
                </div>
              </div>
            </perfect-scrollbar>
          </div>
          <Footer handleShow={handleShow}/>
        </div>
      </div>
      <TodoModal setTodosList={setTodosList} show={showModal} handleClose={handleClose}/>
    </div>
  );
}

export default Home;