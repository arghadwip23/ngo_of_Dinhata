export async function getMetadata(id){
    // const res = await fetch(`http://localhost:3000/api/blogs`,{
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({id})
    // });
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`,{
        cache: "no-store", 
    });
    const result = await res.json();
    if (result.ok) {
        return result.blog;
    } else {
        console.error('Failed to fetch blog');
    }
    return {
        title: 'Blog not found',
        description: 'Blog not found',
        image: ''
    };
}