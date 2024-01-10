class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    
  }

  setChatbotMessage = (message) => {
    this.setState(state => ({...state, messages: [...state.messages, message]}))
  } 
  handleCustomerSupport = () => {
    const customerSupportMessage = this.createChatBotMessage("Hangi konuda yardım almak istiyorsunuz?", {
      widget: "supportOptions"
    });
    this.setChatbotMessage(customerSupportMessage);
  }

  handleCustomerSuggestions = () => {
    const musicGenresMessage = this.createChatBotMessage("Hangi müzik türünü tercih edersiniz?", {
      widget: "musicGenresOptions"
    });
    this.setChatbotMessage(musicGenresMessage);
  }
  handleMusicGenreOption = (genre) => {
    const message = this.createChatBotMessage(`Tercih ettiğiniz müzik türü: ${genre}`)
    this.setChatbotMessage(message);
  }
  
}


export default ActionProvider;
