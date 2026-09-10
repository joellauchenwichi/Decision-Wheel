require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/comment", async (req, res) => {
    const { choice, allOptions } = req.body;
    const context = allOptions.join(", ");

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `A decision wheel had these options: "${context}". The wheel landed on "${choice}". Based on the context of all the options, give a short fun one sentence comment about the chosen option. If the options look like gibberish or random characters, just say something like "Interesting choice... even if we're not sure what it means!"`
                    }]
                }]
            })
        });

        const data = await response.json();
        const comment = data.candidates[0].content.parts[0].text;
        res.json({ comment });
    } catch (error) {
        res.status(500).json({ comment: "Couldn't generate a comment this time!" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));