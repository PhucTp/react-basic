import React from 'react';
class Mycomponent extends React.Component { 
    /*
        JSX  code javascript bên trong html đơn giản dùng dấu mở ngoặc 
        JSX => return block
        state -> cập nhật lại dữ liệu không cần refresh lại trang
     */ 
    state ={
        name:'Ronandol', 
        channal: 'Hoi dan It'
    }
    handleOnchange= (event)=>{
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }
    handleOnclick= ()=>{
        console.log('hit the button')
        alert('cc')
    }
    render() {
             return (
            <>
            <div className='first'>
                <input value ={this.state.name} type="text"
                    onChange={(event) => this.handleOnchange(event)}
                />
                Hello Component, My name is {this.state.name}   
            </div>
            <div className='Second'>
                My youtube channal is {this.state.channal}
            </div>
            <div className='third'> 
                <button onClick={(event)=> this.handleOnclick(event)}>Click me</button>
            </div>
            </>
        )
    }
};
export default Mycomponent;
