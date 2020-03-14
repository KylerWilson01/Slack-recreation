import { NEW_MESSAGE } from "./definitions"

export function addMessage(msg) {
  console.log(msg)
  return {
    type: NEW_MESSAGE,
    payload: msg
  }
}