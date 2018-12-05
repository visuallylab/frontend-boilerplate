module.exports = {
    users: [
        { id: 123, name: "John" },
        { id: 456, name: "Tony" }
    ],
    comments: [
        { id: 987, user_id: 123, body: "Hello how are you", date: new Date('2017-07-03') },
        { id: 995, user_id: 456, body: "Nice to meet you", date: new Date('2017-08-17') }
    ]
}