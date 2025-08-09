const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword, role });
        await newUser.save();
        res.status(201).json({ message: 'User registered', user: newUser });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userEmail = await User.findOne({ email })

        if (!userEmail) return res.status(400).json({ message: "invalid user" })

        const comparePassword = await bcrypt.compare(password, userEmail.password)
        if (!comparePassword) return res.status(401).json({ message: "invalid password" })

        // 3. Generate JWT token
        const token = jwt.sign(
            { userId: userEmail._id, role: userEmail.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        // 4. Send response with token
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: userEmail._id,
                username: userEmail.username,
                email: userEmail.email,
                role: userEmail.role,
            },
        });

    } catch (err) {
        res.status(500).json({ message: err.message })
    }


}