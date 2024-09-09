const express = require('express');  
const dotenv = require('dotenv');  
const cors = require('cors');  
const productRoutes = require('./routes/blogs.route');  
const logger = require('./middleware/logger');  

dotenv.config();  

const app = express();  
const PORT = process.env.PORT || 3000;  

 
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  
app.use(cors());  
app.use(logger);  

 
app.use('/product', productRoutes);  

app.listen(PORT, () => {  
  console.log(`Server is running on port ${PORT}`);  
});