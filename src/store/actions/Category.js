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
