import { AsyncStorage } from "react-native";

// export const SIGNUP = "SIGNUP";
// export const LOGIN = "LOGIN";
export const AUTHENTICATE = "AUTHENTICATE";

export const authenticate = (userId, token) => {
  return { type: AUTHENTICATE, userId: userId, token: token };
};

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAV0PHoLbf3byHxHAmBqvjjSFXFN9Q1hoE",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong";
      console.log(errorId);
      if (errorId === "EMAIL_EXISTS") {
        message = "This email exist already!!";
      } else if (errorId === "INVALID_PASSWORD") {
        message = "This password is not valid";
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);

    dispatch(authenticate(resData.localId, resData.idToken));
    const exiprationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000
    );
    saveDataToStorage(resData.idToken, resData.localId, exiprationDate);
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAV0PHoLbf3byHxHAmBqvjjSFXFN9Q1hoE",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong";
      console.log(errorId);
      if (errorId === "INVALID_EMAIL") {
        message = "This email could not be found!";
      } else if (errorId === "INVALID_PASSWORD") {
        message = "This password is not valid";
      }
      throw new Error(message);
    }
    const resData = await response.json();
    console.log(resData);

    dispatch(authenticate(resData.localId, resData.idToken));
    const exiprationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000
    );
    console.log(exiprationDate);
    saveDataToStorage(resData.idToken, resData.localId, exiprationDate);
  };
};

const saveDataToStorage = (token, userId, exiprationDate) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      userId: userId,
      expiryDate: exiprationDate.toISOString(),
    })
  );
};
