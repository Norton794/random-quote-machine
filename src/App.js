import React from 'react';


class App extends React.Component{
  constructor(props) {
     super(props);
    this.state = {
      random: 0,
      quotes: [
        {
          text: "Do what thou wilt shall be the whole of the Law.",
          author: "Aleister Crowley"
        },
        {
          text: "Be yourself; everyone else is already taken.",
          author: "Oscar Wilde"
        },
        {
          text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
          author: "Maya Angelou"
        },
        {
          text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
          author: "Mahatma Gandhi"
        },
        {
          text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
          author: "Ralph Waldo Emerson"
        },
        {
          text: "It always seems impossible until it's done.",
          author: "Nelson Mandela"
        },
        {
          text: "You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot - it's all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive.",
          author: "Maya Angelou"
        },
        {
          text: "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
          author: "Confucious"
        },
        {
          text: "Wonder is the beginning of wisdom.",
          author: "Socrates"
        },
        {
          text: "Everything that irritates us about others can lead us to an understanding of ourselves.",
          author: "Carl Gustav Jung"
        }
    ],
     classes: ["class-0", "class-1", "class-2", "class-3", "class-4", "class-5", "class-6", "class-7", "class-8", "class-9"]
    }
    
    this.changeQuote = this.changeQuote.bind(this)
  }
   
   
   componentDidMount() {
     setTimeout(()=>{
       this.setState({
         random: Math.floor(Math.random() * 10)
       }) 
     }, 200)
    }
   
   changeQuote(){
     setTimeout(()=>{
 
       this.setState({
         random: Math.floor(Math.random() * 10)
       }) 
 
     }, 300)
   }
   
    
   
   render(){
     return(
       <div id="quote-box" class={this.state.classes[this.state.random]}>
         <h3 id="text">{this.state.quotes[this.state.random].text}</h3>
         <p id="author"> - {this.state.quotes[this.state.random].author}</p>
         <div id="group-buttons">
           <button id="new-quote" onClick={this.changeQuote}>New Quote</button>
           <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet Quote</a>
         </div> 
       </div>
     );
   }
     
   
 }
 

export default App;
