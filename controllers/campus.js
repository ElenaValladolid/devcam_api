//@desc     Obtener todos los campus
//@route    /api/v1/campus
//@access   publico
exports.getCampus = (req, res, next) =>{
    res.status(200).json({success:true, msg: 'Lista de todos los campus'});    
}

//@desc     Crear un nuevo elemento - alta de campus
//@route    /api/v1/campus
//@access   publico
exports.createCampus = (req, res, next) =>{
    res.status(201).json({success: true, msg:"Elemento creado"});
}

//@desc      Obtener un campus por su id
//@route     /api/v1/campus/:id
//@access    publico
exports.getCampusId = (req, res, next) =>{
    res.status(200).json({success: true, msg: `Info del campus ${req.params.id}`});
}

//@desc      Modificar  un campus por su id
//@route     /api/v1/campus/:id
//@access    publico
exports.modifyCampus = (req, res, next) =>{
    res.status(200).json({success: true, msg: `Elemento modificado ${req.params.id}`});
}
//@desc      Eliminar  un campus por su id
//@route     /api/v1/campus/:id
//@access    publico
exports.deleteCampus = (req, res, next) =>{
    res.status(200).json({success: true, msg: `Elemento eliminado ${req.params.id}`});
}