const Task = require("../models/Task")
const User = require("../models/User")

exports.getAllEmployees = async (req, res) => {
    try {
        const result = await User.find({ role: "employee" }).select("name email mobile role active isDelete")
        // .select("-password") :- all but password nhi
        res.status(200).json({ message: "employee fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch all employee" })
    }
}

exports.updateEmployee = async (req, res) => {
    try {
        const { eid } = req.params
        let obj = {}
        const { name, email, mobile } = req.body

        if (name) {
            obj = { ...obj, name: name }
        }
        if (email) {
            obj = { ...obj, email }
        }
        if (mobile) {
            obj = { ...obj, mobile }
        }

        if (obj.name || obj.email || obj.mobile) {
            // runValidators : model validations check
            await User.findByIdAndUpdate(eid, obj, { runValidators: true })
        }
        res.status(200).json({ message: "employee update success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to update employee" })
    }
}

exports.toggleEmployeeStatus = async (req, res) => {
    try {
        const { status } = req.body
        if (typeof status !== "boolean") {
            return res.status(400).json({ message: "status is required" })
        }
        const { eid } = req.params
        await User.findByIdAndUpdate(eid, { active: status }, { runValidators: true })
        res.status(200).json({ message: "employee status update success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to status update employee" })
    }
}

exports.deleteEmployee = async (req, res) => {
    try {
        const { eid } = req.params
        await User.findByIdAndUpdate(eid, { isDelete: true }, { runValidators: true })
        res.status(200).json({ message: "employee delete success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete employee" })
    }
}

exports.restoreEmployee = async (req, res) => {
    try {
        const { eid } = req.params
        await User.findByIdAndUpdate(eid, { isDelete: false }, { runValidators: true })
        res.status(200).json({ message: "employee restore success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to restore employee" })
    }
}

exports.permanentDeleteEmployee = async (req, res) => {
    try {
        const { eid } = req.params
        await User.findByIdAndDelete(eid)
        res.status(200).json({ message: "employee delete permanently" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete permanently employee" })
    }
}

exports.createTask = async (req, res) => {
    try {
        const { task, desc, priority, due, employee } = req.body
        if (!task || !desc || !priority || !due || !employee) {
            return res.status(400).json({ message: "all fields required" })
        }
        await Task.create({ task, desc, priority, due, employee })
        res.status(200).json({ message: "create task success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to create task" })
    }
}

exports.readTask = async (req, res) => {
    try {
        const result = await Task.find()
        res.status(200).json({ message: "read task success", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to read task" })
    }
}

exports.updateTask = async (req, res) => {
    try {
        const { tid } = req.params
        const { task, desc, priority, due, employee } = req.body
        const obj = {}
        if (task) obj.task = task
        if (desc) obj.desc = desc
        if (priority) obj.priority = priority
        if (employee) obj.employee = employee
        if (due) obj.due = due

        await Task.findByIdAndUpdate(tid, obj, { runValidators: true })
        res.status(200).json({ message: "update task success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to update task" })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const { tid } = req.params
        await Task.findByIdAndDelete(tid)
        res.status(200).json({ message: "task delete success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete task" })
    }
}