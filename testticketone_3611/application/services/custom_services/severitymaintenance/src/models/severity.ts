
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const severitySchema = new Schema({
   severityName: String,
   SeverityDescription: String
})

const severityModel = mongoose.model('severity', severitySchema, 'severity');
export default severityModel;
