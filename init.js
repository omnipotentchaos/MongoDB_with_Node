const mongoose = require("mongoose");
const Chat = require("./models/chat")
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err);
})

const sampleChats = [
    {
        from: "john_doe",
        to: "jane_smith",
        msg: "Hey, how's it going?",
        created_at: new Date()
    },
    {
        from: "jane_smith",
        to: "john_doe",
        msg: "It's going well! Thanks for asking.",
        created_at: new Date()
    },
    {
        from: "alex_jones",
        to: "sam_williams",
        msg: "Just wanted to confirm our meeting for tomorrow.",
        created_at: new Date()
    },
    {
        from: "sam_williams",
        to: "alex_jones",
        msg: "Confirmed! Looking forward to it.",
        created_at: new Date()
    },
    {
        from: "peter_parker",
        to: "gwen_stacy",
        msg: "Don't forget the assignment is due on Friday.",
        created_at: new Date()
    },
    {
        from: "gwen_stacy",
        to: "peter_parker",
        msg: "Got it, thanks for the reminder!",
        created_at: new Date()
    },
    {
        from: "bob",
        to: "alice",
        msg: "Are you free for lunch next week?",
        created_at: new Date()
    }
];

Chat.insertMany(sampleChats);