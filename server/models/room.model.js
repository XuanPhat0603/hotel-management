import mongoose from "mongoose";
import Ticket from "./ticket.model";

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  roomtype: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RoomType",
    required: true,
  },
  charge: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Charge",
  },
  description: {
    type: String,
    default: "None",
  },
  status: {
    type: String,
    default: "Waiting",
    required: true,
    enum: ["Waiting", "Using", "Available", "NeedClean"],
  },
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
