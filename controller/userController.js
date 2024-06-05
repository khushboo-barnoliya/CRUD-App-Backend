
import userModel from "../model/User.js"


//create api

const CreateUser = async (req, res) => {

  try {
    const { name, fathername, email, phone } = req.body;

    const newUser = new userModel({
      name, fathername, email, phone
    })
    await newUser.save();
    res.status(200).json({ success: true, Message: 'User Created Successfully.', newUser })
  } catch (error) {
    console.log(error);
    res.status(200).json({ success: false, Message: 'Internal Server Error!'})
  }

}



// read api

const GetUser = async(req, res) =>{
  try {
    const user = await userModel.find()
    if(!user){
      return res.status(404).json({success: false, Message: 'User Not Found!', user})
    }
    else{
      res.status(200).json({success: true, user})
    }
  } catch (error) {
    return res.status(500).json({success: false, Message: 'Internal Server Error!', user})
  }
}




//update user

const UpdateUser = async(req, res) => {
  try {
      const UserId = req.params.id
      const updatedUser = await userModel.findByIdAndUpdate(UserId, req.body,
        {new: true  }
      )
      if(!updatedUser){
        return res.status(404).json({success: false, Message: 'User not found!'})
      }
      else{
        res.status(200).json({success: true, Message: 'User updated successfully.', updatedUser})
      }
  } catch (error) {
    console.log(error);
    return res.status(500).json({success: false, Message: 'Internal Server Error!'})
  }
}



// delete user

const DeleteUser = async(req, res) => {
try {
  const UserId = req.params.id
  const delUser = await userModel.findByIdAndDelete(UserId)
  if(!delUser){
    return res.status(404).json({success: false, Message: 'User not found!'})
  }
  else{
    res.status(200).json({success: true, Message: 'User Deleted successfully', UserId})
  }
} catch (error) {
  return res.status(500).json({success: false, Message: 'Internal Server Error!'})
}
}

export { CreateUser, GetUser, UpdateUser, DeleteUser }

