/* Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1 */




let facebookProfile = {
  name: "Mike Rotch",
  friends: 51241,
  messages: ["I love you, Hugh Jass! <3"],
  postMessage: function addMessage(message) {
    // Don't forget that you must specify the property in the object all the way down from the top!
    facebookProfile.messages.push(message);
  },
  deleteMessage: function removeMessage(index) {
    // splice (start, delete count, item to add);
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    // Again, using friends alone here will not work; must specify object first
    return facebookProfile.friends += 1;
  },
  removeFriend: function () {
    return facebookProfile.friends -= 1;
  }
};