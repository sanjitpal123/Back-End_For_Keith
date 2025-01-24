import express from 'express'
import upload from '../../Config/multerConfig.js'
import { CoreAndprinciple, getallcorandprinciple } from '../../Controllers/About/CoreAndPriciple.js';

const CoreAndPricipleRouter=express.Router();
CoreAndPricipleRouter.post('/create', upload.single('image'), CoreAndprinciple);
CoreAndPricipleRouter.get('/getall',getallcorandprinciple);
export default CoreAndPricipleRouter;