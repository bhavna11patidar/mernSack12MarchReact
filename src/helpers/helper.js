import axios from 'axios';
export function getPostData(url,done){
    axios.get(url)
    .then((response)=>{
        console.log(response);
       done(response);
    })
    .catch(err=>{
        console.log(err);
    })
} 


export function addPostData(url,data,done){
    axios.post(url, data)
    .then((response)=>{
        //console.log(response);
       done(response);
    })
    .catch(err=>{
        console.log(err);
    })
}