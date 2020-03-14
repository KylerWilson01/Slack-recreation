import io from "socket.io-client"
import store from "../../store"
import { addMessage } from "./actions"

const dispatch = store.dispatch
const socket = io.connect("http://192.168.1.21:3001")

socket.on("message", msg => dispatch(addMessage(msg)))

export default socket