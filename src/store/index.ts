import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"

export interface ApplicationState {
    layout: LayoutState,
    router: RouterState
}

export const createRootReducer = (history: History) =>
    combineReducers({
        layout: layoutReducer,
        router: connectRouter(history)
    })