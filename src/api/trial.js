// See https://www.npmjs.com/package/json-server#getting-started
// for fake API

// Plural routes
// GET    /posts
// GET    /posts/1
// POST   /posts
// POST localhost:3001/posts with JSON object (no id necessary)
// PUT    /posts/1
// DELETE /posts/1

// functions for retrieving data from users endpoints

const BASE_URL = "https://frontend-interview-20210623.herokuapp.com";

export const getTrials = async () => {
  const response = await fetch(`${BASE_URL}/trials`);
  //   console.log("hittting the endpoint of ", `${BASE_URL}/trials`);
  if (response.ok) {
    const responseJSON = await response.json();
    return responseJSON.trials;
  } else {
    throw new Error(`Error getting trials: ${response.json}`);
  }
};

export const addUser = async (user) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (response.ok) {
    console.log(`succesfully added user `, user);
    return response.json();
  } else {
    throw new Error(`Error adding user: ${response.json}`);
  }
};

export const deleteUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    console.log(`succesfully deleted user `, userId);
    return response.json();
  } else {
    throw new Error(`Error deleting user ${userId}: ${response.json}`);
  }
};
