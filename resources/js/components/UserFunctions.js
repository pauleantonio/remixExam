import axios from 'axios'


export const register = newUser=>{
    return axios
    .post('/api/auth/register',newUser,{
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>{
        console.log(res)
    }).catch(res=>{
    
    })

}

export const login = user=>{
    return axios
    .post('/api/auth/login',{
        email:user.email,
        password:user.password
    },{
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>{
        localStorage.setItem('usertoken',res.data.token);
        console.log(res)
    }).catch(res=>{

    })

}

export const getProfile = ()=>{
    return axios
    .post('/api/auth/profile',{
        headers:{Authorization:`Bearer ${localStorage.usertoken}`}
    })
    .then(res=>{
        console.log(res)
        console.log(res.data)
        return res.data
    }).catch(res=>{
       
    })

}



