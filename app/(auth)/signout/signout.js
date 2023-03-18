
const signOut = ()  => {

        
        localStorage.removeItem('token');
        localStorage.removeItem('User');

        window.location.replace('/')
    
    }

    module.exports = { signOut }
