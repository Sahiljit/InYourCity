import Event from '../../../models/eventModel'
import connectDB from '../../../utils/db'

connectDB()


export default async function handler(req, res){

    const {
        query : {id},
        method
    } = req

    switch(method){

        case 'GET':
            try{

                const event = await Event.findById(id)
                res.status(200).json({success: true, event})
            }
            catch(error){
                res.status(400).json({success: false})
            }
            break  
    }

}