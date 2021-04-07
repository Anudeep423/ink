import { FC, createContext, useReducer, useEffect } from 'react'
import { initialState, rootReducer } from './reducers'
import { UniversalActionInterface, universalActions } from './actions/universal'

type ActionInterface = {
    universal: UniversalActionInterface
}

type AppContextInterface = {
    universal: any,
    state: any;
    dispatch: React.Dispatch<any>;
    actions: ActionInterface
}

const StoreContext = createContext<Partial<AppContextInterface>>(initialState)


const StoreProvider: FC<{ children: any }> = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState)

    const actions: ActionInterface = {
        universal: universalActions(state, dispatch)
    }

    // Log new state
    useEffect(() => {
        console.log("New State: ", state)
    }, [state])

    // Render state, dispatch and special case actions
    return (
        <StoreContext.Provider value={{ state, dispatch, actions }}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreContext, StoreProvider }