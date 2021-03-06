import React, {Component} from 'react'
import {monsregister} from './UserFunctions'

class Create extends React.Component{
    constructor(){
        super()
        this.state={ 
            name:'',
            errors:{}

        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const user={
            name:this.state.name,
        }

        monsregister(user).then(res=>{
                if(res){
                    this.props.history.push('/crud')
                } 
        })
    }
    render(){
        return(
            <div className='container'>
                <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">
                        Register Monster
                    </h1>
                    <div className="form-group"> 
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className="form-control"
                    name="name" 
                    placeholder="Enter Name here" 
                    value={this.state.name}
                    onChange={this.onChange}></input>
                    </div>

              
                    <button type="submit" className="btn btn-primary" >Submit</button>

                </form>
                  
                  
                </div>

                </div>

            </div>

        )

    }

}

export default Create