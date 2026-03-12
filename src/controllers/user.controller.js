const ProfileController = async (req, res) => {
    try {

        const user = req.user;
        res.status(200).json({ data: user });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
    // {id: "1234", email: "user@example.com"}
}


module.exports = {
    ProfileController
};