import axios from 'axios'


export const register = newUser=>{
    return axios
    .post('/api/auth/register',newUser,{
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>{
      
        return res.data;
    }).catch(err=>{
        console.log(err)
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
       
        return res.data.token;
    }).catch(err=>{
        console.log(err)
    })

}

export const getProfile =()=>{
    return axios
    .get('/api/auth/profile',{
        headers:{Authorization:`Bearer ${localStorage.usertoken}`}
    })
    .then(res=>{
      
        return res.data
    }).catch(res=>{
       
    })

}



