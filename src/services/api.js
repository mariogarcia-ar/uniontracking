// import { useState } from 'react';
// import { useToken } from './auth';

function getToken(){
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.data.token;
}

export async function titleGetAll() {
    return fetch( process.env.REACT_APP_API_URL+'/title/get/all', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+getToken(),
    
        },
        body: JSON.stringify()
    })
        .then(data => data.json())
}


export async function genderGetAll() {
    return fetch( process.env.REACT_APP_API_URL+'/gender/get/all', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+getToken(),
    
        },
        body: JSON.stringify()
    })
        .then(data => data.json())
}

export async function ethnicityGetAll() {
    return fetch( process.env.REACT_APP_API_URL+'/ethnicity/get/all', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+getToken(),
    
        },
        body: JSON.stringify()
    })
        .then(data => data.json())
}

export async function positionGetAll() {
    return fetch( process.env.REACT_APP_API_URL+'/position/get/all', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+getToken(),
    
        },
        body: JSON.stringify()
    })
        .then(data => data.json())
}

export async function sickplanGetAll() {
    return fetch( process.env.REACT_APP_API_URL+'/sickplan/get/all', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+getToken(),
    
        },
        body: JSON.stringify()
    })
        .then(data => data.json())
}

 

export async function addMember(data) {
    return fetch( process.env.REACT_APP_API_URL+'/member', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+getToken(),
        },
        body: JSON.stringify(data)
    })
        .then(data => data.json())
}
 