const mongoose = require('mongoose');

const Tasks = require('./models/Tasks');



// const t = new Tasks({
//     title: 'Math test on Friday',
//     description: 'Need to study for the test, do lesson 5.1-5.6',
//     status: 'Pending'
// })
// t.save().then(t => {
//     console.log(t)
// })
// .catch(e => {
//     console.log(e);
// })

Tasks.insertMany({ 
    title: 'History presentation on the Renaissance',
    description: 'Create a slide deck and script for the group presentation on key Renaissance figures.',
    status: 'Not Started'
    },
    { 
    title: 'Science lab report',
    description: 'Complete the write-up for the chemistry experiment on chemical reactions.',
    status: 'Completed'
    },
    { 
    title: 'Group presentation for Economics',
    description: 'Coordinate with the team to develop slides on the topic of supply and demand.',
    status: 'Completed'
    },
    {
      title: 'Spanish vocabulary quiz',
      description: 'Study vocabulary list for chapters 1-3, quiz is on Thursday.',
      status: 'Pending'
    })
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })