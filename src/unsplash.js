import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID SXT1micF8NY49-D3GOgEYyjFRj8GvEJ4y4kfqEd3UdE'

      }
})