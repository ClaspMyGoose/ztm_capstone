import { ACTION_TYPES } from "./user.types"

export const setCurrentUser = (user) => {
  return {type: ACTION_TYPES.SET_CURRENT_USER, payload: user }
}

