import posts from "./tuits.js";
let tuits = posts;


const TuitsController = (app) => {
    app.get('/api/tuits', getTuits)
    app.post('/api/tuits', createTuit)
    app.delete('/api/tuits/:tid', deleteTuit)
    app.put('/api/tuits/:tid', updateTuit);
}

const deleteTuit = (req, res) => {
    const tuitId = req.params['tid']
    tuits = tuits.filter((tuit) => tuit._id !== tuitId)
    res.sendStatus(200);
}

const getTuits = (req, res) => {
    res.json(tuits);
}

const createTuit = (req, res) => {
    const newTuit = req.body
    newTuit._id = (new Date()).getTime() + ''
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.disliked = false;
    tuits.push(newTuit)
    res.json(newTuit)
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}



export default TuitsController