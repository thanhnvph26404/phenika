import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const praySchema = mongoose.Schema({
    email: {
        type: String,
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamps: true, versionKey: false })
praySchema.plugin(mongoosePaginate);
export default mongoose.model('Pray', praySchema)
