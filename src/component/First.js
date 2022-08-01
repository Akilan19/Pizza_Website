import React from 'react'
import '../styles/about.css';
import Left from './Left';
import Right from './Right';

function First(props) {
  return (
    <div className="first">
        <Left na={props.na}/>
        <Right des={props.des}/>
    </div>
  )
}

export default First