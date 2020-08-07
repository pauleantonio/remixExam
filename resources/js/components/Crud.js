import React, {Component} from 'react'


class Crud extends React.Component{

    constructor(){
        super()
        this.state={
            id:0,
            name:'',
            monsters:[],
            monster:''
        }
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
            console.log(this.state.monsters)

        
        }).catch(res=>{
           console.log(res);
        })
    }

    getOne(e){
        return axios
        .get(`api/monster/item/`+e,{
            headers:{'Content-Type':'application/json'}
        })
        .then(res=>{
            this.setState({
                monster:res.data
                
            })
            console.log(this.state.monster)
        }).catch(res=>{
           
        })
    }

    // create(){
    //     return axios
    //     .get(`api/monster/item/`,{
    //         headers:{'Content-Type':'application/json'}
    //     })
    //     .then(res=>{
          
    //         console.log("created")
    //     }).catch(res=>{
           
    //     })
    // }

    // update(e){
    //     return axios
    //     .get(`api/monster/update/`+e,{
    //         headers:{'Content-Type':'application/json'}
    //     })
    //     .then(res=>{
    //         console.log("updated")
    //     }).catch(res=>{
           
    //     })
    // }

    // delete(e){
    //     return axios
    //     .get(`api/monster/delete/`+e,{
    //         headers:{'Content-Type':'application/json'}
    //     })
    //     .then(res=>{
    //         console.log("deleted")
    //     }).catch(res=>{
           
    //     })
    // }

    



    render(){

        const posts=()=>{
            if(!this.state.monsters){
                return (     <tr>
                     <td>ID</td>
                    <td>Monster Name</td>
                    <td>
                    LOADING
                    </td>
                     </tr>);
            }
            if(this.state.monsters.length==0){
                return (<tr>
                             <td>ID</td>
                    <td>Monster Name</td>
                    <td>
                    LOADING
                    </td>
                     </tr>);
            }
            else{

                return  this.state.monsters.map((mons,index)=>
                <tr key={index}>
                {console.log(mons)}
                <td>{mons.id}</td>
                <td>{mons.name}</td>
                <td>
                <button className="btn btn-primary mr-4">Add</button>
                <button className="btn btn-secondary mr-4">Edit</button>
                <button className="btn btn-danger mr-4">Delete</button>
                </td>
                </tr>
                )
            }
        
        }
     
      
        return(
            <div className="container">
                <div className="row">
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