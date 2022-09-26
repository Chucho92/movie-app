import axios from 'axios';

const URI = 'https://jsonplaceholder.typicode.com/posts';

export default async (req, res) => {
    if(req.method === 'POST') {
        const postData = JSON.parse(req.body);
        return res.json({
            status: 'Saving Post to DB!',
            ...postData
        })
    } else {
        const response = await axios.get(URI);
        const posts = response.data

        return res.json(posts.slice(0, 20));
    }
    
}