import { CREATECOMMENT } from '../actions/commentActions';

export default function reducer(state = {}, action) {
  console.log(action.payload, 'commentreducer');
  switch(action.type) {
    case CREATECOMMENT:
      return {
        ...state,
        [action.payload.id]: [...(state[action.payload.id] || []),
          action.payload.comment
        ]
      };
    default:
      return state;
  }
}
