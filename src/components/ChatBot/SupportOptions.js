import React from "react";

const SupportOptions = (props) => {
    const options = [
        { text: "Sipariş Ödeme Sorunu", handler: () => { }, id: 1 },
        { text: "Site Giriş Sorunu", handler: () => { }, id: 2 },
        { text: "Site Kayıt Sorunu", handler: () => { }, id: 3 },
        { text: "Diğer Sorunlar", handler: () => { }, id: 4 },
    ];

    const handleOptionClick = (option) => {
        switch (option.id) {
            case 1:
                displayMessage("Ürününüzü sepete ekledikten sonra kart bilgilerinizi doğru girdiğinizden emin olun. Ödeme onaylandı yazısını görene kadar bekleyin. Tekrar sıkıntı olursa müşteri destek hattından bize ulaşabilirsiniz. :)");
                break;
            case 2:
                displayMessage("Mail hesabınızı ve şifrenizi doğru girdiğinizden emin olunuz. Aksi bir durum yaşamanız halinde müşteri destek hattımızı arayabilirsiniz. :)");
                break;
            case 3:
                displayMessage("Veri tabanında işleminiz gerçekleşmemiş olabilir lütfen internet bağlantınızı kontrol edin");
                break;
            case 4:
                displayMessage("Diğer sorunlarınız için müşteri destek hattımızla iletişime geçebilirsiniz iyi günler dileriz.");
                break;
            default:
                break;
        }
        }
        const displayMessage = (message) => {
            const chatbotMessage = props.createChatBotMessage(message);
            props.actionProvider.setChatbotMessage(chatbotMessage);
          };

          const buttonsMarkup = options.map((option) => (
            <button key={option.id} onClick={() => handleOptionClick(option)} className="option-button bg-[#7e22ce] text-white py-1 px-2 rounded-full border-none cursor-pointer mb-1">
              {option.text}
            </button>
          ));

        return <div>{buttonsMarkup}</div>;
    };

    export default SupportOptions;
