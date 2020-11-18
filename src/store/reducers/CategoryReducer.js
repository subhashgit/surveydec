<<<<<<< HEAD
const initialState = {
  categories: [],
  subCategory: [],
  adminCollection: [],
  adminCategory: [],
  collection: []
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CATEGORY":
      return {
        ...state,
        categories: action.payload,
      };
    case "SUB_CATEGORY":
      return {
        ...state,
        subCategory: action.payload,
      };
    case "ADMIN_COLLECTION":
      return {
        ...state,
        adminCollection: action.payload,
      };
    case "ADMIN_CATEGORY":
      return {
        ...state,
        adminCategory: action.payload,
      };
    case "GET_COLLECTION":
      return {
        ...state,
        collection: action.payload,
      };
    default:
      return state;
  }
}
=======
const initialState = {
    categories: [],
    subCategory: [],
    adminCollection: [],
    adminCategory: []
  };
  
  export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_CATEGORY":
        return {
          ...state,
          categories: action.payload,
        };
        case "SUB_CATEGORY":
          return {
            ...state,
            subCategory: action.payload,
          };
          case "ADMIN_COLLECTION":
            return {
              ...state,
              adminCollection: action.payload,
            };
            case "ADMIN_CATEGORY":
              return {
                ...state,
                adminCategory: action.payload,
              };
      default:
        return state;
    }
  }
  
>>>>>>> d45d2d5f115802539a4074d6c839274105e9fb02
