const initialState = {
    categoryList: [
        {
            id: 'eee111eee',
            name: 'electronics',
            description: 'In Technology whatever can be done will be done',
        },
        {
            id: 'fff111fff1',
            name: 'food',
            description: 'Eat whatever you want, and if someone tries to lecture you about your weight, eat them too!',
        }
    ],
    activeCategory: '',
    activeDescription: '',
}

export default function categoryReducer(state = initialState, action) {
    let { type, payload } = action;
    //  console.log('payload', state)
    switch (type) {
        case 'ACTIVE':
            return { ...state, activeCategory: payload.category, activeDescription: payload.description };
        case 'INACTIVE':
            return initialState;
        default:
            return state;
    }
}


export function active (category, description) {
    return {
        type: 'ACTIVE',
        payload: {
            category,
            description
        }
    };
}

export function inactive (){
    return {
        type: 'INACTIVE'
    };
}
