import * as tuitsDao from './tuits-dao.js'

const TuitsController = (app) => {
    app.get('/api/tuits', getTuits)
    app.post('/api/tuits', createTuit)
    app.delete('/api/tuits/:tid', deleteTuit)
    app.put('/api/tuits/:tid', updateTuit);
}

const deleteTuit = async (req, res) => {
    const tuitId = req.params.tid
    console.log(tuitId)
    const status = await tuitsDao.deleteTuit(tuitId)
    res.json(status);
}

const getTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body
    const insertedTuit = await tuitsDao.createTuit(newTuit)
    res.json(insertedTuit)
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates)
    res.json(status);
}



export default TuitsController