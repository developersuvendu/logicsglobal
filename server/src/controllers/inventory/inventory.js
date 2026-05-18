import Inventory from "../../models/inventory.js";

export const getInventories = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log("User ID :",typeof req.body);
    if (!userId) {
      return res.send({
            status: 400,
        message: "User ID not found",
        });
    }
    const inventory = await Inventory.find({ userId });
    return res.send({
      status: 200,
      message: "Inventory Fetched Successfull!",
      data: inventory,
    });
  } catch (error) {
    return res.send({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const addInventory = async (req, res) => {
  try {
    const { userId, assetName, category } = req.body;
    const newAsset = new Inventory({
      userId: userId,
      assetName: assetName,
      category: category,
    });
    await newAsset.save();

    return res.send({
      status: 201,
      message: "Assets Added Successfully",
      data: newAsset,
    });
  } catch (error) {
    console.log("Error :", error);
    return res.send({
      status: 500,
      message: "Internal Server Error",
    });
  }
};


// Update Inventory
export const updateInventory = async (req, res) => {
  try {
    const { id } = req.params;

const updatedInventory = await Inventory.findByIdAndUpdate(
  id,
  req.body,
  {
    returnDocument: "after",
    runValidators: true,
  }
);

console.log("Inventory Id :", id);
console.log("Request Body :", typeof req.body);
    if (!updatedInventory) {
      return res.send({
            status: 404,
            message: 'Inventory not found'
        }); 
    }

    return res.send({
            status: 200,
      message: "Inventory updated successfully",
      data: updatedInventory,
        });
    return res.send({
            status: 200,
      message: "Inventory updated successfully",
      data: updatedInventory,
        });

  } catch (error) {
    console.log(error);
    return res.send({
            status: 500,
      message: "Internal Server Error",
        });
  }
};

// Delete Inventory
export const deleteInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInventory = await Inventory.findByIdAndDelete(id);

    if (!deletedInventory) {
      return res.send({
            status: 404,
            message: 'Inventory Not Found'
        }); 
    }

    return res.send({
            status: 200,
            message: 'Inventory Deleted Successfully'
        }); 

  } catch (error) {
    console.log(error);
    return res.send({
            status: 500,
            message: 'Internal Server Error'
        });  
  }
};