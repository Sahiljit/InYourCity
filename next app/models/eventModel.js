import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({

    title : {type: String, required: true},
    description : {type:String, required: true},
    location : {type:String, required: true},
    date : {type:String, required: true},
    city: {type:String, required: true},
    category: {type:String, required: true},
    month : {type:String, required: true},
    image : {type:String, required: true},
    isFeatured: {type:Boolean, required: true}
        
})

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema)

export default Event