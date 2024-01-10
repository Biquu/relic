import React from "react";

export default function AdviceBtn({ handleButtonClick, actionProvider }) {
  const handleButtonClickWithCondition = (option) => {
    handleButtonClick(option);

    // Burada seçeneğe göre özel bir işlem gerçekleştirilebilir
    if (option === "customerSupport") {
      actionProvider.handleCustomerSupport();
    } else if (option === "customerSuggestions") {
      actionProvider.handleCustomerSuggestions();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <button
        className="bg-[#7e22ce] text-white py-2 px-3 rounded-full border-none cursor-pointer"
        onClick={() => handleButtonClickWithCondition("customerSupport")}
      >
        Müşteri Destek Servisi
      </button>
      <button
        className="bg-[#7e22ce] text-white py-2 px-4 rounded-full border-none cursor-pointer"
        onClick={() => handleButtonClickWithCondition("customerSuggestions")}
      >
        Müşteri Öneri Sistemi
      </button>
    </div>
  );
}