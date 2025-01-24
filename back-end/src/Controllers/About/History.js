import exp from "constants";
import History from "../../Model/Aboutpage/HistoryModel.js";

export const Histroy=async(req , res)=>{
    try{
        const {date, description}=req.body;
        console.log(date)
        if(!date || !description)
        {
            return res.status(401).json({
                message:'Fill all the field'
            })
        }
       
         const created =await History.create({
            date: date,
            description: description
         })
         if(created)
         {
            return res.status(201).json({
                message:'Created Successfully',
                created,
                success:true
            })
         }
         return res.status(401).json({
            message:'Can not create',
            success:false
         })

    }catch(error)
    {
        return res.status(501).json({
            message:'Internal server error',
            success:false
            
        })
    }
}


export const getallHistory=async(req,res)=>{
    try{
        const getall=await History.find({});
        if(!getall)
        {
            return res.status(404).json({
                message:'Can not get history'
            })
        }
        return res.status(201).json(getall);

    }catch(error)
    {
     return res.status(501).json({
        message:'Internal server error',
        success:false
     })
    }
}