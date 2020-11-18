<<<<<<< HEAD
export const AddCategory = (category, features) => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const db = getFirestore();
  const firebase = getFirebase();
  let parentCategory = [];

  await db
    .collection("categories")
    .add({
      label: category.label,
      value: category.value,
      features: features,
      createdAt: new Date(),
    })
    .then(() => {
      db.collection("categories")
        .get()
        .then((docRef) => {
          docRef.docs.forEach((value, index) => {
            console.log("valueee", value.id);
            parentCategory.push({ ...value.data(), id: value.id });
          });
        })
        .then(() => {
          dispatch({
            type: "ADMIN_COLLECTION",
            payload: parentCategory,
          });
        });
      dispatch({
        type: "GET_CATEGORY",
      });
      console.log("sucessss");
    });
};
export const updateCategory = (category, features, id) => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const db = getFirestore();
  const firebase = getFirebase();

  var docRef = db.collection("categories").doc(id);

  docRef
    .update({
      label: category.label,
      value: category.value,
      features: features,
      createdAt: new Date(),
    })
    .then(() => {
      dispatch({
        type: "GET_CATEGORY",
      });
      console.log("updatedd");
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
export const deleteCategory = (id) => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const db = getFirestore();
  let parentCategory = [];
  await db
    .collection("categories")
    .doc(id)
    .delete()
    .then(() => {
      db.collection("categories")
        .get()
        .then((docRef) => {
          docRef.docs.forEach((value, index) => {
            console.log("valueee", value.id);
            parentCategory.push({ ...value.data(), id: value.id });
          });
        })
        .then(() => {
          dispatch({
            type: "ADMIN_COLLECTION",
            payload: parentCategory,
          });
        });
      dispatch({
        type: "DELETE_CATEGORY",
        payload: true,
      });
      console.log("deleteddd");
    });
};
// export const getCollection = () => async (
//   dispatch,
//   getState,
//   { getFirestore, getFirebase }
// ) => {
//   const db = getFirestore();
//   const firebase = getFirebase();
//   let subCollection = [];

//   await db
//     .collection("categories")

//     .get()
//     .then((subDocRef) => {
//       subDocRef.docs.forEach((subValue) => {
//         subCollection.push({ ...subValue.data(), id: subValue.id });
//       });
//     })
//     .then(() => {
//       dispatch({
//         type: "GET_COLLECTION",
//         payload: subCollection,
//       });
//     });
// };

// export const getSubCategory = (docRef) => async (
//   dispatch,
//   getState,
//   { getFirestore, getFirebase }
// ) => {
//   const db = getFirestore();
//   const firebase = getFirebase();
//   let subCollection = [];

//   db.collection("categories")
//     .doc(docRef)
//     .collection("subCategory")
//     .get()
//     .then((subDocRef) => {
//       subDocRef.docs.forEach((subValue) => {
//         subCollection.push({
//           ...subValue.data(),
//           subId: subValue.id,
//           parentID: docRef,
//         });
//       });
//     })
//     .then(() => {
//       dispatch({
//         type: "SUB_CATEGORY",
//         payload: subCollection,
//       });
//     });
// };

// export const getAttributes = (docRef) => async (
//   dispatch,
//   getState,
//   { getFirestore, getFirebase }
// ) => {
//   const db = getFirestore();
//   const firebase = getFirebase();
//   let attributes = [];
//   db.collection("categories")
//     .doc(docRef.parentId)
//     .collection("subCategory")
//     .where("value", "==", docRef.value)
//     .get()
//     .then((subDocRef) => {
//       subDocRef.docs.forEach((subValue) => {
//         subValue.data().features.forEach((data) => {
//           attributes.push(data);
//         });
//       });
//     })
//     .then(() => {
//       dispatch({
//         type: "CATEGORY_FEATURES",
//         payload: attributes,
//       });
//     })
//     .catch((e) => {
//       console.log("errrorr");
//     });
// };
=======
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
  
>>>>>>> d45d2d5f115802539a4074d6c839274105e9fb02
