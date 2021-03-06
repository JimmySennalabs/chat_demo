import consumer from "./consumer"

consumer.subscriptions.create( { channel: "RoomChannel" , room_id: 2 } , {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("connected...")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data)
    console.log(data.message)
    console.log(data.message.content)
    
    const element = document.getElementById('user-id');    

    const messageContainer = document.getElementById('messages')
    messageContainer.innerHTML = messageContainer.innerHTML + data.message.content 
  }
});
