import Person from "../models/person.model.js";

export const getAllPersons = async (req, res) => {
   try {
      const allPersons = await Person.find();
      return res.status(200).json({
         success: true,
         message: "All Persons Fetched",
         data: allPersons,
      });
   } catch (error) {
      console.log("Some Error Occured in getAllPersons controller");
      console.error(error.message);

      return res
         .status(500)
         .json({ success: false, message: "Error in Fetching Persons" });
   }
};

export const createPerson = async (req, res) => {
   try {
      const { name, age, gender, mobileNumber } = req.body;

      if (!name || !age || !gender || !mobileNumber) {
         return res
            .status(400)
            .json({ success: false, message: "Please Fill all the Fields" });
      }

      const mobileNumberExists = await Person.findOne({ mobileNumber });
      if (mobileNumberExists) {
         return res
            .status(400)
            .json({ success: false, message: "Mobile Number Already Exists" });
      }

      const newPerson = new Person({
         name,
         age,
         gender,
         mobileNumber,
      });

      await newPerson.save();
      return res
         .status(201)
         .json({
            success: true,
            message: "Person Created Successfully",
            data: newPerson,
         });
   } catch (error) {
      console.log("Some Error Occured in createPerson controller");
      console.error(error.message);

      return res
         .status(500)
         .json({ success: false, message: "Error in Creating Persons" });
   }
};

export const updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    
    const idExists = await Person.findById(id);

    if (!idExists) {
      return res
        .status(404)
        .json({ success: false, message: "Person not Found" });
    }

    const { name, age, gender, mobileNumber } = req.body;
    const updatedPerson = { name, age, gender, mobileNumber };
    const personAfterUpdate = await Person.findByIdAndUpdate(id, updatedPerson, { new: true });

    return res
      .status(200)
      .json({
        success: true,
        message: "Person Updated Successfully",
        data: personAfterUpdate,
      });
   } catch (error) {
      console.log("Some Error Occured in updatePerson controller");
      console.error(error.message);

      return res
         .status(500)
         .json({ success: false, message: "Error in Updating Person" });
   }
};


export const deletePerson = async (req, res) => { 
  try {
    const { id } = req.params;
    const idExists = await Person.findById(id);

    if (!idExists) {
      return res
        .status(404)
        .json({ success: false, message: "Person not Found" });
    }

    await Person.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, message: "Person Deleted Successfully" });
  } catch (error) {
    console.log("Some Error Occured in deletePerson controller");
    console.error(error.message);

    return res
      .status(500)
      .json({ success: false, message: "Error in Deleting Person" });
  }
 }