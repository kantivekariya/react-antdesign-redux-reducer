export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};

export const getLocalState = key => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return serializedState;
  } catch (err) {
    return undefined;
  }
};

export const setLocalState = (key, val) => {
  try {
    localStorage.setItem(key, val);
  } catch (err) {
    // Ignore write errors.
  }
};

export const loadUserFromLocal = () => {
  try {
    const expires_in = getLocalState("expires_in");
    const expires_at = getLocalState("expires_at");
    const access_token = getLocalState("access_token");
    // const refresh_token = getLocalState("refresh_token");
    // console.log("access_token", access_token);
    // console.log("refresh_token", refresh_token);
    // console.log("new Date().getTime()", new Date().getTime());
    // console.log("expires_in", expires_in);
    // console.log("expires_at", expires_at);
    console.log(
      "new Date().getTime() < expires_at",
      new Date().getTime() < expires_at
    );
    //alert(expires_in && access_token && new Date().getTime() < expires_at)
    if (expires_in && access_token && new Date().getTime() < expires_at) {
      // authorize
      return {
        isAuthenticated: true
      };
    } else {
      // unauth
      return {
        isAuthenticated: false
      };
    }
  } catch (err) {
    return {
      isAuthenticated: false
    };
  }
};
