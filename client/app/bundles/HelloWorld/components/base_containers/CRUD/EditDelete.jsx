import React from 'react'

const EditDelete = (props) => {

  let handleClick = (eventType) => {
    switch(eventType) {
      case 'edit':
        props.handleEdit()
        break
      case 'delete':
        props.handleDelete()
        break
      default:
        console.log(eventType)
        break
    }
  }

  return <div>
    <li>
      <button
        className="btn btn-default"
        onClick={handleClick.bind(this, 'edit')}
      ><i className="fa fa-pencil">Редактировать</i>
      </button>
    </li>
    <li>
      <button
        className="btn btn-warning"
        onClick={handleClick.bind(this, 'delete')}
      ><i className="fa fa-trash">Удалить</i>
      </button>
    </li>
    {props.children}
  </div>
}

export default EditDelete