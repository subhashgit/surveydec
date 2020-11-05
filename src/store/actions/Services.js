export const AddNewService = (
  service,
  attributes,
  userLocation,
  images
) => async (dispatch, getState, { getFirestore, getFirebase }) => {
  const db = getFirestore();
  const firebase = getFirebase();
  let attribute = [];
  let providerName;
  var user = await firebase.auth().currentUser;
  let serviceName = service.serviceName;
  let category = service.category;
  let location = service.location;
  let maps = service.maps;
  let imageArray = [];
  // let image = service.image;

  // console.log("attributeee", attribute);

  if (user) {
    const data = await db
      .collection("users")
      .get()
      .then((providerInfo) => {
        providerInfo.docs.forEach((userData) => {
          if (user.uid == userData.id) {
            providerName = userData.data().Name;
          }
        });
      })
      .then(() => {
        images.forEach(async (serviceImage) => {
          const ImageResponse = await fetch(serviceImage);
          // console.log("resss", res);
          const blob = await ImageResponse.blob();
          const imageUrl = "";

          var ref = firebase.storage().ref().child(`images/${serviceImage}`);

          const imageRes = await ref.put(blob).then((response) => {
            const firebaseRes = response.ref.getDownloadURL().then((url) => {
              imageArray.push(url);
            });
          });
        });
        function addService() {
          const res = db
            .collection("services")
            .add({
              serviceName: serviceName,
              category: category,
              location: location,
              maps: userLocation.locationCords,
              userId: user.uid,
              attributes: attributes,
              approve: false,
              providerName: providerName,
              averageRating: 0,
              totalReviews: 0,
              imageUrl: "",
              imagesUrl: imageArray,
              createdAt: new Date(),
            })
            .then((docRef) => {
              dispatch({
                type: "ADD_SERVICE",
                payload: true,
              });
            })
            .catch(() => {
              dispatch({
                type: "ADD_SERVICE",
                payload: false,
              });
            });
        }

        setTimeout(addService, 15000);
      })
      .then(async () => {});
  } else {
    console.log("user is not signed in");
  }
};
export const getServices = () => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const db = getFirestore();
  const firebase = getFirebase();
  let services = [];

  const res = await db
    .collection("services")
    .where("approve", "==", true)
    .get()
    .then((response) => {
      response.docs.forEach((item, index) => {
        services.push({ ...item.data(), id: item.id });
      });
      dispatch({
        type: "SERVICES",
        payload: services,
      });
    });
};

export const addProviderServices = () => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const db = getFirestore();
  const firebase = getFirebase();
  const state = getState();
  let currentUser = state.Auth.user;
};

export const addServiceReview = (state, id) => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const db = getFirestore();
  const firebase = getFirebase();
  var user = await firebase.auth().currentUser;
  const reduxState = getState();
  let Name = reduxState.profile.profileInformation[0].Name;
  let photoURL = reduxState.profile.profileInformation[0].photoURL;

  let total =
    (state.service +
      state.valueOfMoney +
      state.professionalism +
      state.presentaion) /
    4;
  const res = await db
    .collection("services")
    .doc(id)
    .collection("reviews")
    .add({
      serviceId: id,
      comment: state.comment,
      serviceRating: state.service,
      moneyRating: state.valueOfMoney,
      professionalismRating: state.professionalism,
      presentaionRating: state.presentaion,
      totalRating: total,
      userId: user.uid,
      Name: Name,
      photoURL: photoURL,
      createdAt: new Date(),
    })
    .then((e) => {
      let total;
      let AverageRating;
      db.collection("services")
        .doc(id)
        .get()
        .then((ratingDoc) => {
          db.collection("services")
            .doc(id)
            .collection("reviews")
            .get()
            .then((docRef) => {
              docRef.docs.map((data, index) => {
                var docRef = db.collection("services").doc(id);
                docRef.update({
                  averageRating:
                    (ratingDoc.data().averageRating += data.data().totalRating) /
                    (index + 1),
                  totalReviews: ratingDoc.data().totalReviews + 1,
                });
              });
            });
        });
      console.log("data added sucessfully");

      console.log("totall", total);
    });
};
export const getServiceReview = (id) => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const db = getFirestore();
  const firebase = getFirebase();

  let Reviews = [];
  dispatch({
    type: "LOADER",
    payload: false,
  });
  const res = await db
    .collection("services")
    .doc(id)
    .collection("reviews")
    .get()
    .then((docRef) => {
      docRef.docs.map((data) => {
        Reviews.push({
          ...data.data(),
          id: data.id,
        });
      });
    })
    .then(() => {
      dispatch({
        type: "LOADER",
        payload: true,
      });
      dispatch({
        type: "GET_REVIEWS",
        payload: Reviews,
      });
    });
};

