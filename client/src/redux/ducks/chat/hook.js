import socket from "./socket"
import { useSelector } from "react-redux"

export function useChat() {
  const add = msg => socket.emit("message", msg)
  const messages = useSelector(appState => appState.chatState.messages)

  return { add, messages }
}