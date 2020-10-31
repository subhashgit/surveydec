export const AddCategory = (
  category,
  subCategory,
  features,
  SubCollectionName
) => async (dispatch, getState, { getFirestore, getFirebase }) => {
  const db = getFirestore();
  const firebase = getFirebase();

  const res = await db
    .collection("categories")
    .add({
      ...category,
      label: category.label,
      value: category.value,
      subCollections: SubCollectionName,
      createdAt: new Date(),
    })
    .then((docRef) => {
      subCategory.map((value) => {
        db.collection("categories")
          .doc(docRef.id)
          .collection("subCategory")
          .add({
            value,
            features,
            parentId: docRef.id,
            createdAt: new Date(),
          })
          .then((document) => {});
      });
    });
};

export const getCategory = () => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const db = getFirestore();
  const firebase = getFirebase();
  let Category = [];

  const res = db
    .collection("categories")
    .get()
    .then((docRef) => {
      docRef.docs.forEach((value, index) => {
        db.collection("categories")
          .doc(value.id)
          .collection("subCategory")
          .get()
          .then((subDocRef) => {
            subDocRef.docs.forEach((subValue) => {
              Category.push({
                ...subValue.data(),
                subId: subValue.id,
                parentID: docRef.id,
              });
              dispatch({
                type: "GET_CATEGORY",
                payload: Category,
              });
            });
          });
      });
    })
    .then(() => {
      Category.forEach(() => {
        console.log("dataaataaa", data);
      });
    });
};
export const getSubCategory = (docRef) => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const db = getFirestore();
  const firebase = getFirebase();
  let subCollection = [];

  db.collection("categories")
    .doc(docRef)
    .collection("subCategory")
    .get()
    .then((subDocRef) => {
      subDocRef.docs.forEach((subValue) => {
        subCollection.push({
          ...subValue.data(),
          subId: subValue.id,
          parentID: docRef,
        });
      });
    })
    .then(() => {
      dispatch({
        type: "SUB_CATEGORY",
        payload: subCollection,
      });
    });
};

export const getAttributes = (docRef) => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const db = getFirestore();
  const firebase = getFirebase();
  let attributes = [];
  db.collection("categories")
    .doc(docRef.parentId)
    .collection("subCategory")
    .where("value", "==", docRef.value)
    .get()
    .then((subDocRef) => {
      subDocRef.docs.forEach((subValue) => {
        subValue.data().features.forEach((data) => {
          attributes.push(data);
        });
      });
    })
    .then(() => {
      dispatch({
        type: "CATEGORY_FEATURES",
        payload: attributes,
      });
    })
    .catch((e) => {
      console.log("errrorr");
    });
};

export const getAdminCategory = () => async (
    dispatch,
    getState,
    { getFirestore, getFirebase }
  ) => {
    const db = getFirestore();
    const firebase = getFirebase();
    let parentCategory = [];
  
    const res = db
      .collection("categories")
      .get()
      .then((docRef) => {
        docRef.docs.forEach((value, index) => {
          //   console.log("valllll", value.data())
          parentCategory.push({ ...value.data(), id: value.id });
        });
      })
      .then(() => {
        dispatch({
          type: "ADMIN_COLLECTION",
          payload: parentCategory,
        });
      });
  };
  export const getAdminSubCategory = (docRef) => async (
    dispatch,
    getState,
    { getFirestore, getFirebase }
  ) => {
    const db = getFirestore();
    const firebase = getFirebase();
    let subCollection=[]
   
   db
      .collection("categories")
      .doc(docRef)
      .collection("subCategory")
      .get()
      .then((subDocRef) => {
        subDocRef.docs.forEach((subValue) => {
          subCollection.push({ ...subValue.data(), subId: subValue.id , parentID: docRef });
        });
      })
      .then(() => {
       dispatch({
           type: "ADMIN_CATEGORY",
           payload: subCollection
       })
      });
  };
  