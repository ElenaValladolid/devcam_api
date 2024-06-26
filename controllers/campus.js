const Campus = require('../models/Campus');
 //@desc     Obtener todos los campus
//@route    /api/v1/campus
//@access   publico
exports.getCampus = async (req, res, next) =>{
    try{
        const campus = await Campus.find();  //find = encuentra
        res.status(200).json({success:true, msg: 'Lista de campus', data: campus});
        
    } catch (err) {
        res.status(400).json({success: false, error: err.message});
    }    
}

//@desc     Crear un nuevo elemento - alta de campus
//@route    /api/v1/campus
//@access   publico
exports.createCampus = async (req, res, next) =>{   //async (asincronica) = lanzamos algo y ya nos llegara la respuesta.  podemos mandar mas
    try{
        const campus = await Campus.create(req.body);    //await = esperando
        res.status(201).json({success: true, msg:"Elemento creado", data: campus});
    }catch(err){
        res.status(400).json({success: false, error: err.message});
    } 
 
}

//@desc      Obtener un campus por su id
//@route     /api/v1/campus/:id
//@access    publico
exports.getCampusId = async (req, res, next) =>{
    try {
        const campus = await Campus.findById(req.params.id);

        //Evaluar si no se ha encontrado la búsqueda
        if(!campus){
            return res.status(404).json({success: false, msg:'Campus no encontrado'});  
        }
        res.status(200).json({success: true, data: campus});

    } catch (err) {
        res.status(400).json({success: false, error: err.message});
        
    }
    
}

//@desc      Modificar  un campus por su id
//@route     /api/v1/campus/:id
//@access    publico
exports.modifyCampus = async (req, res, next) =>{
    try {
        const campus = await Campus.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: true
        });
            
        //Evaluar si no se ha encontrado la búsqueda
        if(!campus){
            return res.status(404).json({success: false, msg:'Campus no encontrado'});  
        }
        res.status(200).json({success: true, data: campus});

    } catch (err) {
        res.status(400).json({success: false, error: err.message});
    }

}

//@desc      Eliminar  un campus por su id
//@route     /api/v1/campus/:id
//@access    publico
exports.deleteCampus = async (req, res, next) =>{
    try {
        const campus = await Campus.findByIdAndDelete(req.params.id)

         //Evaluar si no se ha encontrado la búsqueda
         if(!campus){
            return res.status(404).json({success: false, msg:'Campus no encontrado'});  
            
        }
        res.status(200).json({success: true, data: campus});
    } catch (err) {
        res.status(400).json({success: false, error: err.message});
    } 
}