export const fetchUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    if(!res.ok){
        throw new Error("Error fetching data");
    }
    return res.json();
}