import React, {Component} from 'react'


class Crud extends React.Component{

    constructor(props){
        super(props)
        this.state={
            id:0,
            name:'',
            monsters:[],
            monster:''
        }
    }

    componentDidMount(){
        this.getMonster();
        this.getOne(1);
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
         
        }).catch(res=>{
           
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

    create(){
        return axios
        .get(`api/monster/item/`,{
            headers:{'Content-Type':'application/json'}
        })
        .then(res=>{
          
            console.log("created")
        }).catch(res=>{
           
        })
    }

    update(e){
        return axios
        .get(`api/monster/update/`+e,{
            headers:{'Content-Type':'application/json'}
        })
        .then(res=>{
            console.log("updated")
        }).catch(res=>{
           
        })
    }

    delete(e){
        return axios
        .get(`api/monster/delete/`+e,{
            headers:{'Content-Type':'application/json'}
        })
        .then(res=>{
            console.log("deleted")
        }).catch(res=>{
           
        })
    }

    



    render(){

        const posts=()=>{
            if(!this.state.monsters){
                return loading
            }
            if(this.state.monsters.length==0){
                return noitem
            }
            else{
               return item
            }
        }
        const loading=(
            <tr>
            <td>Monster Name</td>
            <td>
            LOADING
            </td>
             </tr>
        )

        const noitem=(
            <tr>
            <td>Monster Name</td>
            <td>
            No Monsters
            </td>
             </tr>
        )
        const item=(
            this.state.monsters.map((mons)=>{
                <tr>
                <td>{this.state.monsters.length}</td>
                <td>
                <button className="btn btn-primary mr-4">Add</button>
                <button className="btn btn-secondary mr-4">Edit</button>
                <button className="btn btn-danger mr-4">Delete</button>
                </td>
                </tr>
            })
    

        )
        return(
            <div className="container">
                <div className="row">
                    <table className="table">
                        <thead>
                        <tr>
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