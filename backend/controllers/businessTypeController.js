import BusinessType from "../model/businessType.js";


export const addBusinessType =async (req,res)=>{
  try{
   const {name,description} = req.body;
   const existName=await BusinessType.findOne({name})
   if(existName){
      console.log("This type of business already exists")
   }
   const businessType =await BusinessType.create();
   res.json({
      _id:businessType._id,
      name:businessType.name,
      description:businessType.description
   })
  }catch(error){
   res.status(400).json({message: "businessType can't register"})
  }
};

//getall business type

export const getAllBusinessType =async (req,res)=>{
   const businessType=await BusinessType.find();
   res.status(200).json(businessType);
}