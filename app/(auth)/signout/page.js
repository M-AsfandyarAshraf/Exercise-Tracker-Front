'use client'


export default function Signout() {

        
        localStorage.removeItem('token');
        localStorage.removeItem('User');

        window.location.replace('/')
    
    }
