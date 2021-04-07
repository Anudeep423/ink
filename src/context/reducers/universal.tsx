const universalInitialState = {
    viewMode: 'row',
    relatedTo: 'all'
}

const universalTypes = {
    SET_VIEW_MODE: 'SET_VIEW_MODE',
    SET_TASK_RELATED_TO: 'SET_TASK_RELATED_TO'
}

const universal = (state = universalInitialState, action: any) => {
    switch (action.type) {
        case universalTypes.SET_VIEW_MODE:
        case universalTypes.SET_TASK_RELATED_TO:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export {
    universalInitialState,
    universalTypes, universal
}