import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ToDoLi = (props) => {

  return (
      <div className='flex justify-center items-center mt-2 gap-4 text-black'>
          <li>{props.key} {props.text}</li>
          
          <FontAwesomeIcon
            className=' cursor-pointer '
            icon={faTrash}
              onClick={() => {
                  props.onSelect (props.id)
              }}
          />
      </div>
  )
}

export default ToDoLi