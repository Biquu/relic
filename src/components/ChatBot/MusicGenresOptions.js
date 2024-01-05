import React from "react";

const MusicGenresOptions = (props) => {
    const options = [
        { text: "Rock", handler: () => { }, id: 1 },
        { text: "Metal", handler: () => { }, id: 2 },
        { text: "Enstrümantal Müzik", handler: () => { }, id: 3 },
        { text: "Pop", handler: () => { }, id: 4 },
        { text: "Halk Müziği", handler: () => { }, id: 5 },
        { text: "Blues/Caz", handler: () => { }, id: 6 },
        { text: "Tasavvuf", handler: () => { }, id: 7 },
        { text: "Hiphop/Rap", handler: () => { }, id: 8 },
        { text: "Elektronik Müzik", handler: () => { }, id: 9 },
        { text: "Punk", handler: () => { }, id: 10 },
    ];
    const handleOptionClick = (option) => {
        switch (option.id) {
            case 1:
                displayMessage("Rock müziğinin vazgeçilmezlerini senin için sıralamak isterim: Elektro Gitar konusunda Stratocaster, Telecaster veya Les Paul gibi popüler modelleri tercih edebilirsin. Kaliteli amplifikatör ve efekt pedallar önerebilirim. Bas Gitarda P-bass veya J-bass gibi modelleri önerebilirim. Bunun dışında davul setlerine bakabilirsin. Aynı zamanda güzel bir ses kartı almanı şiddetle tavsiye ederim. :)");
                break;
            case 2:
                displayMessage("You selected Metal!");
                break;
            case 3:
                displayMessage("Enstrümantal Müzik");
                break;
            case 4:
                displayMessage("You selected Pop");
                break;
            case 5:
                displayMessage("You selected Halk Müziği");
                break;
            case 6:
                displayMessage("You selected Blues/Caz");
                break;
            case 7:
                displayMessage("You selected Tasavvuf");
                break;
            case 8:
                displayMessage("You selected Hiphop/Rap");
                break;
            case 9:
                displayMessage("You selected Elektronik Müzik");
                break;
            case 10:
                displayMessage("You selected Punk");
                break;
            default:
                break;
        }
    };
    const displayMessage = (message) => {
        const chatbotMessage = props.createChatBotMessage(message);
        props.actionProvider.setChatbotMessage(chatbotMessage);
      };
    
      const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={() => handleOptionClick(option)} className="option-button bg-61045F text-black py-2 px-3 rounded-full border-none cursor-pointer">
          {option.text}
        </button>
      ));
    
      return <div>{buttonsMarkup}</div>;
    };

export default MusicGenresOptions;
