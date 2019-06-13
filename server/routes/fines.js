var db = require('../models'),
fineService =  require('../services/finesService');

exports.create = function (req, res){
        fineService.create(req, res);
};

exports.read = function (req, res){
    fineService.read(req, res);
};

exports.readAll = function (req, res){
    fineService.readAll(req, res);
};

exports.update = function (req, res){
    var data = req.body;
    fineService.update(req, res, data);
};

exports.delete = function (req, res){
    fineService.delete(req, res);
};
