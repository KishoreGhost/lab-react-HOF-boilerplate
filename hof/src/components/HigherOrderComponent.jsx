import React, { Component } from 'react'

class HigherOrderComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userData: [
            { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
            { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
            { id: '4', name: 'Sam', user_type: 'Entrepreneur', age:58, years:25},
            { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
        ]
      }
    }

    helperFunction(data){
        return data.map((item)=>(
            <React.Fragment key={item.id}>
            <li className='list-elements'>
                <div>Id: {item.id}</div>
                <div>Name: {item.name}</div>
                <div>User Type: {item.user_type}</div>
            </li>
        </React.Fragment>
        ))
    }
        
    renderItems(){
        let data = this.state.userData;
        return this.helperFunction(data)
    }

    renderItemsByUserType(){
        let data = this.state.userData
        let items = data.filter((item)=>{
            return item.user_type === "Designer"
        })
        return this.helperFunction(items)
    }

    renderItemNamesWithJ(){
        let data = this.state.userData
        let items = data.filter((item)=>{
            return item.name[0] === "J";
        })
        return this.helperFunction(items)
    }

    renderBasedOnAge(){
        let data = this.state.userData
        let items = data.filter((item)=>{
            return item.age > 28 && item.age < 50;
        })
        return this.helperFunction(items)
    }

    renderTotalYears(){
        let data = this.state.userData
        let items = data.filter((item)=>{
            return item.user_type === "Designer"
        }).map((item)=>{
            return item.years
        }).reduce((total,current)=>{
            return total + current
        },0)
        return items
    }
    
  render() {
    return (
      <>
        <h1>Display all items</h1>
        <div className='display-box'>
            <ul>{this.renderItems()}</ul>
        </div>
        <h1>Display based on user type</h1>
        <div className='display-box'>
            <ul>{this.renderItemsByUserType()}</ul>
        </div>
        <h1>Filter All Data Starting with J</h1>
        <div className='display-box'>
            <ul>{this.renderItemNamesWithJ()}</ul>
        </div>
        <h1>Filter Based on Age</h1>
        <div className='display-box'>
            <ul>{this.renderBasedOnAge()}</ul>
        </div>
        <h1>Filter Total Years</h1>
        <div className='display-box'>
            {this.renderTotalYears()}
        </div>
      </>
    )
  }
}

export default HigherOrderComponent