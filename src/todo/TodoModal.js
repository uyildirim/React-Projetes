import {Button, Form, Modal} from "react-bootstrap";
import Select from "react-select";
import chroma from 'chroma-js';
import {useState} from "react";


function TodoModal({show, handleClose, setTodosList, ...props}) {

  const [fromItem, setFromItem] = useState({})

  const onChange = (e) => {
    setFromItem({...fromItem, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("fromItem", fromItem)
    setTodosList((data) => [...data, {...fromItem, id: Math.random()*100}])
  }

  const colourOptions = [
    {value: 'ocean', target: {name: "color", value: "#00B8D9"}, label: 'Ocean', color: '#00B8D9'},
    {value: 'blue', target: {name: "color", value: "blue"}, label: 'Blue', color: 'blue'},
    {value: 'purple', target: {name: "color", value: "purple"}, label: 'Purple', color: 'purple'},
    {value: 'red', target: {name: "color", value: "red"}, label: 'Red', color: 'red'},
    {value: 'orange', target: {name: "color", value: "orange"}, label: 'Orange', color: 'orange'},
    {value: 'green', target: {name: "color", value: "green"}, label: 'Green', color: '#36B37E'},
  ]
  const dot = (color = 'transparent') => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });
  const colourStyles = {
    control: (styles) => ({...styles, backgroundColor: 'white'}),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
            ? data.color
            : isFocused
              ? color.alpha(0.1).css()
              : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? chroma.contrast(color, 'white') > 2
              ? 'white'
              : 'black'
            : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    input: (styles) => ({...styles, ...dot()}),
    placeholder: (styles) => ({...styles, ...dot('#ccc')}),
    singleValue: (styles, {data}) => ({...styles, ...dot(data.color)}),
  };


  return (
    <>
      <Modal show={show} onHide={handleClose}>

        <Form onSubmit={onSubmit}>
          {JSON.stringify(props)}
          <Modal.Header closeButton>
            <Modal.Title>Adding Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Control required name="todo" onChange={onChange} type="text" placeholder="Add todo"/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control required onChange={onChange} name="date" type="date"/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Select name="color" onChange={onChange} styles={colourStyles} options={colourOptions}/>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit">
              {props.save}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
    ;
}

TodoModal.defaultProps = {
  save: "Save Changes"
}

export default TodoModal;