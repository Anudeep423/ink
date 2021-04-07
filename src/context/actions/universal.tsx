import { universalTypes } from "../reducers/universal"

const { SET_VIEW_MODE, SET_TASK_RELATED_TO } = universalTypes

const setViewMode = (viewMode: string) => ({
    type: SET_VIEW_MODE,
    payload: { viewMode }
})

const setTaskRelatedTo = (relatedTo: string) => ({
    type: SET_TASK_RELATED_TO,
    payload: { relatedTo }
})

export type UniversalActionInterface = {
    setViewMode: (viewMode: string) => void,
    setTaskRelatedTo: (relatedTo: string) => void
}

// HINT: state and dispatch will be usable
export const universalActions = (state: any, dispatch: any) => {
    return {
        setViewMode,
        setTaskRelatedTo
    }
}