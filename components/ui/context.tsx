import { FC, createContext, useContext, useMemo, useReducer } from "react"

export interface StateModifiers {
    openSidebar: () => void
    closeSidebar: () => void
}

export interface StateValues {
    isSidebarOpen: boolean
}

const stateModifiers = {
    openSidebar: () => {},
    closeSidebar: () => {}
}

const initialState = { isSidebarOpen: false}

type State = StateValues & StateModifiers

const UIContext = createContext<State> ({
    ...stateModifiers,
    ...initialState
})

type Action = { type: "OPEN_SIDEBAR"  |  "CLOSE_SIDEBAR" }

function uiReducer(state: StateValues, action: Action) {
    switch(action.type) {
        case "OPEN_SIDEBAR": {
            return {
                ...state,
                isSidebarOpen: true
            }
        }
        case "CLOSE_SIDEBAR": {
            return {
                ...state,
                isSidebarOpen: false
            }
        }
    }
}

export const UIProvider: FC = ({children}) => {
    const [state, dispatch] = useReducer(uiReducer, initialState)

    const openSidebar = () => dispatch({type: "OPEN_SIDEBAR"})
    const closeSidebar = () => dispatch({type: "CLOSE_SIDEBAR"})

    // this fixes performance issue, prevents rerenders when the state changes
    const value = useMemo(() => {
        return {
            ...state,
            openSidebar,
            closeSidebar,
        }
    }, [])

    return (
        <UIContext.Provider value={value}>
            {children}
        </UIContext.Provider>
    )
}

export const useUI = () => {
    const context = useContext(UIContext)
    return context
}
