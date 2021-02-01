
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const servicetypesSchema = new Schema({
   servicename: String,
   servicedescription: String
})

const servicetypesModel = mongoose.model('servicetypes', servicetypesSchema, 'servicetypes');
export default servicetypesModel;
