exports.signin = async (req, res) => {
    try {
        res.status(200).json({ message: "login success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to login" })
    }
}

exports.registerEmployee = async (req, res) => {
    try {
        res.status(200).json({ message: "register employee success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to register employee" })
    }
}

exports.signout = async (req, res) => {
    try {
        res.status(200).json({ message: "signout success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to signout employee" })
    }
}

exports.sendOTP = async (req, res) => {
    try {
        res.status(200).json({ message: "sendOTP success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to sendOTP" })
    }
}

exports.verifyOTP = async (req, res) => {
    try {
        res.status(200).json({ message: "verifyOTP success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to verifyOTP" })
    }
}

exports.forgetPassword = async (req, res) => {
    try {
        res.status(200).json({ message: "forgetPassword success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to forgetPassword" })
    }
}

exports.changePassword = async (req, res) => {
    try {
        res.status(200).json({ message: "changePassword success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to changePassword" })
    }
}