export const auth = async (req, res, next) => {
   const url = req.url
   const allowUrl=process.env.AUTH_URL.split(',')
  
   
   if(allowUrl.includes(url)){
      return next()
     }
     else{
       return res.redirect('/')
     }
   
}