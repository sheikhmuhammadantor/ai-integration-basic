require('dotenv').config({ path: '.env.local' });
const express = require('express')
const cors = require('cors')
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const morgan = require('morgan');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(`${process.env.GEMINI_API_KEY}`);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const port = process.env.PORT || 3000
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nw7sq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// })

async function run() {
  try {
    app.get('/', (req, res) => {
      res.send('Hello from AI Integration Server..')
    });

    // Ai test get;
    app.get('/ai-test', async (req, res) => {
      const prompt = "Explain how AI works";
      const result = await model.generateContent(prompt);
      res.send({response : result.response.text()})
    })

    // AI Response;
    app.get('/ai-res', async (req, res) => {
      const {prompt} = req.query;
      const result = await model.generateContent(prompt);
      console.log(result.response.text())
      res.send({response : result.response.text()})
      // res.send({response: `Lorem, ipsum dolor sit amet consectetur aisquam nu Lorem, ipsum dolor sit amet consectetur aisquam nu Lorem, ipsum dolor sit amet consectetur aisquam nu Lorem, ipsum dolor sit amet consectetur aisquam nu Lorem, ipsum dolor sit amet consectetur aisquam nu Lorem, ipsum dolor sit amet consectetur aisquam nuLorem, ipsum dolor sit amet consectetur aisquam nu`})
      // res.send({response: `Lorem`})
      // res.send({response: `Lorem`})
      // give me a raw markdown file with out this - (```markdown......````)
    })

  } finally {

  }
}
run().catch(console.dir)

app.listen(port, () => {
  console.log(`AI is running on port ${port}`)
})
