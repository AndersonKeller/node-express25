export const createPostController=async(req,res)=>{
    const text = 'INSERT INTO post($1,$2,$3)'
    const bodyValues =Object.values(req.body)
    bodyValues.push(req.user.id)
    //
    //insert into post values(1,'teste','teste content',9);

}