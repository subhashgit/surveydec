const initialState = {
  serviceMessage: false,
  services: [],
  categoryFeatures: [],
  serviceProviderInfo: [],
  reviewsList: [],
  userReviewInfo: [],
  loader: false,
  myServices: []
};

export default function ServiceReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_SERVICE":
      return {
        ...state,
        serviceMessage: action.payload,
      };
    case "SERVICES":
      return {
        ...state,
        services: action.payload,
      };
    case "MY_SERVICES":
        return {
          ...state,
          myServices: action.payload,
        };  
    case "CATEGORY_FEATURES":
      return {
        ...state,
        categoryFeatures: action.payload,
      };
    case "SERVICE_PROVIDER_INFO":
      return {
        ...state,
        serviceProviderInfo: action.payload,
      };
    case "GET_REVIEWS":
      return {
        ...state,
        reviewsList: action.payload,
      };
    case "USER_REVIEW_INFO":
        return {
          ...state,
          userReviewInfo: action.payload,
        };
    case "LOADER":
        return {
          ...state,
          loader: action.payload,
        };    

    default:
      return state;
  }
}
