import React, { Component } from 'react'
 
class PromptList extends Component{
  render(){
    const {name, profitability, brand, customer} = this.props
    return(
      <ul className='PromptList'>
        <li className='PromptList-details'>Name : {name}</li>
        <li className='PromptList-details'>Class: {profitability}</li>
        <li className='PromptList-details'>Roll: {brand}</li>
        <li className='PromptList-details'>Address : {customer}</li>
      </ul>
    )
  }
}
 
export default PromptList