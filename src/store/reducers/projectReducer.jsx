const initState = {
    projects: [
        {id:'1',title:'haha',content:'yada'},
        {id:'2',title:'blah',content:'yadauada'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT': 
            console.log('Created Project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer