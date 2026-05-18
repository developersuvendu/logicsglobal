import Leave from "../../models/leave";

export const applyLeave = async (req, res) => {
    try {

        const {
            userId,
            leaveType,
            startDate,
            endDate,
            days,
            reason
        } = req.body;

        const leave = await Leave.create({
            userId,
            leaveType,
            startDate,
            endDate,
            days,
            reason
        });

        return res.status(201).json({
            success: true,
            message: "Leave applied successfully",
            data: leave
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


export const updateLeave = async (req, res) => {
    try {

        const { id } = req.params;

        const updatedLeave = await Leave.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedLeave) {
            return res.status(404).json({
                success: false,
                message: "Leave not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Leave updated successfully",
            data: updatedLeave
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export const deleteLeave = async (req, res) => {
    try {

        const { id } = req.params;

        const deletedLeave = await Leave.findByIdAndDelete(id);

        if (!deletedLeave) {
            return res.status(404).json({
                success: false,
                message: "Leave not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Leave deleted successfully"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};