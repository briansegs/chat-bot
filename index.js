const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const apiKey = require('./config')

const configuration = new Configuration({
    organization: "org-n5YJ8lN7b4DFAEcdZrOXzRI1",
    apiKey: apiKey.apiKey,
});
const openai = new OpenAIApi(configuration);
const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080

app.post('/',async (req, res) => {
    const { message } = req.body;
    console.log("message: ", message.data)
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
        });
    res.json({
        message: response.data.choices[0].text,
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
