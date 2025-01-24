import express from "express";

import { getallHistory, Histroy } from "../../Controllers/About/History.js";
const HistoryRouter=express.Router();
HistoryRouter.post('/create',Histroy);
HistoryRouter.get('/getall',getallHistory);
export default HistoryRouter;