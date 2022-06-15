import Event from '../../../models/eventModel'
import connectDB from '../../../utils/db'

connectDB()


export default async function handler(req, res){

    const {method} = req

    switch(method){

        case 'GET':
            try{

                const queryObj = {...req.query}

                console.log(queryObj)

                const query =  Event.find(queryObj)

                const filteredEvents = await query

                res.status(200).json({success: true, data: filteredEvents})
            }
            catch(error){
                res.status(400).json({success: false})
            }
            break
        
        case 'POST':
            try{
                const event = await Event.create(req.body)
                res.status(201).json({success: true, data: event})
            }
            catch(error){
                res.status(400).json({success : false})
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }

}