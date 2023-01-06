const { Configuration, OpenAIApi } = require("openai");
const express = require('express')

const configuration = new Configuration({
    organization: "org-n5YJ8lN7b4DFAEcdZrOXzRI1",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const app = express()
const port = 3000

app.post('/',async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
        });
    console.log(response.data.choices[0].text)
    res.json({
        data: response.data
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
