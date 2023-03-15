'use client'


export default function Signout() {

        
        localStorage.removeItem('token');

        window.location.replace('/')
    
    }
