import Leave from "../../models/leave.js";

export const getLeaves = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log("User ID :", userId);
    if (!userId) {
      return res.send({
        status: 400,
        message: "User ID not found",
      });
    }
    const leaves = await Leave.find({ userId });
    return res.send({
      status: 200,
      message: "Leaves Fetched Successfull!",
      data: leaves,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const applyLeave = async (req, res) => {
    try {
        const { userId, leaveType, startDate, endDate, days, reason } = req.body;
        const leave = await Leave.create({ userId, leaveType, startDate, endDate, days, reason });
        return res.send({
            status: 200,
            success: true,
            message: "Leave applied successfully",
            data: leave
        }); 

    } catch (error) {
        console.log(error);
        return res.send({
            status: 500,
            success: false,
            message: "Internal Server Error",
        }); 

    }
};

export const updateLeave = async (req, res) => {
    console.log(req.params);
    try {
        const { id } = req.params;
        console.log("id :",id);
        const updatedLeave = await Leave.findByIdAndUpdate(
            id,
           req.body,
             {
    returnDocument: "after",
    runValidators: true,
  }
        );

        if (!updatedLeave) {
          return res.send({
            status: 404,
            success: false,
            message: "Leave not found",
          });
        }

        return res.send({
            status: 200,
            success: true,
            message: "Leave updated successfully",
            data: updatedLeave
        });

    } catch (error) {
        console.log(error)
        return res.send({
            status: 500,
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const deleteLeave = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedLeave = await Leave.findByIdAndDelete(id);

        if (!deletedLeave) {
            return res.send({
            status: 404,
            success: false,
            message: "Leave not found"
        });
        }

        return res.send({
            status: 200,
            success: true,
             message: "Leave deleted successfully"
        });

    } catch (error) {
        console.log(error);
        return res.send({
            status: 500,
            success: false,
            message: "Internal Server Error"
        });

    }
};