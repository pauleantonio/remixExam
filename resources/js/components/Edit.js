import React, {Component} from 'react'
import {monsedit} from './UserFunctions'

class Edit extends React.Component{
    constructor(){
        super()
        this.state={ 
            id:'',
            name:'',
            monster:'',
            load:false,
            errors:{}

        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    componentDidMount(){
        this.setState({
            name:this.props.location.state.name,
            id:this.props.location.state.id
        })

    }
 

    onSubmit(e){
        e.preventDefault()
        const user={
            id:this.state.id,
            name:this.state.name
        }

        monsedit(user).then(res=>{
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
                        Edit Monster
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

export default Edit