const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async(req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.createEmployees = async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await employee.save();
    res.json({
        "status": "Employee saved!!"
    });
}

employeeCtrl.getEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findOne({ _id: id});
    res.json(employee);
}

employeeCtrl.editEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary 
    };
    await Employee.findOneAndUpdate({ _id: id }, {$set : employee});
    res.json({status: 'Employee Update'});
}

employeeCtrl.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    await Employee.findOneAndDelete({ _id: id });
    res.json({status: 'Employee deleted'});
}
module.exports = employeeCtrl;