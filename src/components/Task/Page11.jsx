// Mounting Phase 
import {useEffect} from 'react';

const Page11 = () => {
   

    useEffect(() =>{
        const timer = setTimeout(() =>{
            console.log('Component is Mounted');
        }, 5000);
    
        return () =>{
            clearTimeout(timer);
            console.log('Component is Unmounted');
        }
    }, []); 
    
    return (
        <div>
            <h1>Mounting Examples 🚀</h1>
        </div>
    )
}

export default Page11