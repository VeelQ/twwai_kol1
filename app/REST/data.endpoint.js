const users = [
    {
        id: 1,
        name: "user1",
        email: '123@123.co',
        password: '123',
    },
    {
        id: 2,
        name: "user2",
        email: '123@123.co',
        password: '1234',
    },
    {
        id: 3,
        name: "user3",
        email: '123@123.co',
        password: '1235',
    }
]



const dataEndpoint = (router) => {
    
    router.get('/api/users', async (request, response, next) => {
        response.status(200).send({users: users});
    });
 
 
    router.post('/api/users', async (request, response, next) => {
        posts.push(request.body.newUser);
 
        response.status(200).send({users: users[users.length - 1]});
    });

    router.get('/api/users/:id', async (request, response, next) => {
        console.log(request.params.id);
        response.status(200).send({post: users[users.id = request.params.id-1]});
     });

 };

 
 export default dataEndpoint;