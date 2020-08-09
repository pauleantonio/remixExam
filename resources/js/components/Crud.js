import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Crud extends React.Component{

    constructor(){
        super()
        this.state={
            id:0,
            name:'',
            monsters:[],
            monster:''
        }
        this.delete=this.delete.bind(this)
    }

    componentDidMount(){
        this.getMonster();
    }

    getMonster(){
        return axios
        .get('/api/monster',{
            headers:{'Content-Type':'application/json'}
        })
        .then(res=>{
            this.setState({
                monsters:res.data
                
            })
            {console.log(this.state.monsters)}
        }).catch(res=>{
           console.log(res);
        })
    }



   

  

 

    delete(e){
        return axios
        .post(`api/monster/delete/`+e,{
            headers:{'Content-Type':'application/json'}
        })
        .then(res=>{
            this.getMonster();
        }).catch(res=>{
           
        })
    }

    



    render(){

        const posts=()=>{
            if(!this.state.monsters){
                return (    
                     <tr>
             
                    <td>
                    LOADING
                    </td>
                     </tr>);
            }
            if(this.state.monsters.length==0){
                return (<tr>
               
                    <td>
                    No Monsters
                    </td>
                     </tr>);
            }
            else{

                return  this.state.monsters.map((mons,index)=>
                <tr key={index}>
            
                <td>{mons.id}</td>
                <td>{mons.name}</td>
                <td>
           
                <Link to={{ pathname: '/edit', state: { id: mons.id,name:mons.name} }}className="btn btn-secondary mr-4">Edit</Link >
               <button className="btn btn-danger mr-4" onClick={()=>{
                    this.delete(mons.id)
               }}
        
               >Delete</button>
                </td>
                </tr>
                )
            }
        
        }
     
      
        return(
            <div className="container">
                <div className="row">
                         <Link className="btn btn-primary m-4" to="/create">Create Monster</Link>
                    <table className="table">
                        <thead>
                        <tr>
                        <td>ID</td>
                        <td>Monster Name</td>
                        <td>Commands</td>
                        </tr>

                        </thead>
                        <tbody>
                        {posts()}
                    
                   

                        </tbody>


                    </table>
                    
                </div>
            </div>

        )



    }

}

export default Crud