const mongoose = require('mongoose');
const task = require('./models/notes');

mongoose.connect('mongodb+srv://Raaz-8:8899@mt-clust.3vc5i.mongodb.net/stige-proj?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', function () {
    console.log('Connected To DB');
}).on('error', function (error) {
    console.log('Not Connected To DB :', error);
});


//Add Data
function add(desc, com) {
    var data = new task({
        Description: desc,
        Completed: com
    });
    data.save().then(() => {
        console.log("New item added");
    })

}

//Read Data

function read() {
    task.find({
        Completed: false
    }).then(function (result) {

        if (result.length !== 0) {
            result.forEach(res => {
                console.log(res);
            })
        } else {
            console.log("Everthing is completed");
        }
    })
}


//Update Data

function update() {
    task.updateMany({
        Completed: false
    }, {
        Completed: true
    }).then(function (result) {

        if (result.n !== 0) {
            console.log("Data updated succesfully");
        } else {
            console.log("Nothing to update");
        }
    })
}

//Delete Data using ID

function deletedata(data) {
    task.findOne({
        Description: data
    }).then(function (result) {

        if (result !== null) {
            task.deleteOne({
                _id: result._id
            }).then(function (res) {

                if (res.n !== 0) {
                    console.log(data + " task deleted succesfully");
                } else {
                    console.log("No such task exist")
                }
            })
        } else {
            console.log("No such task exist")
        }


    })
}

add('Mongo DB Project', true);
add('Veditrue LMS', true);
add('Drum Kit', true);
add('Netflix Clone', true);
add('ShivVichar', true);
add('Travel Site', true);

read();
update();

deletedata("Drum Kit");

