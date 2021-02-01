
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ticketSchema = new Schema({
   ticketname: String,
   ticketcurrentnotes: String,
   ticketnoteshistory: String,
   severityname: String,
   severityid: Number,
   ticketservicetype: String,
   ticketstatus: String,
   servicetypename: String,
   servicetypeid: Number
})

const ticketModel = mongoose.model('ticket', ticketSchema, 'ticket');
export default ticketModel;
