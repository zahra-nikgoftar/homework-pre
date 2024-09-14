const baseURL = "mongodb://localhost:27017/user"; // Write down the base URL of the created API.




const getAllUser = async () => {  
  try {  
    const response = await fetch(baseURL);  
    const users = await response.json();  
    return users;  
  } catch (error) {  
    console.error("Error fetching users:", error);  
    throw error;  
  }  
};  

const createUser = async (userData) => {  
  try {  
    const response = await fetch(baseURL, {  
      method: "POST",  
      headers: {  
        "Content-Type": "application/json",  
      },  
      body: JSON.stringify(userData),  
    });  

    if (!response.ok) {  
      throw new Error(`HTTP error ${response.status}`);  
    }  

    const newUser = await response.json();  
    return newUser;  
  } catch (error) {  
    console.error("Error creating user:", error);  
    throw error;  
  }  
};  

const deleteUser = async (id) => {  
  try {  
    const response = await fetch(`${baseURL}/${id}`, {  
      method: "DELETE",  
    });  

    if (!response.ok) {  
      throw new Error(`HTTP error ${response.status}`);  
    }  

    
    return;  
  } catch (error) {  
    console.error("Error deleting user:", error);  
    throw error;  
  }  
}; 


export { getAllUser, deleteUser, createUser };