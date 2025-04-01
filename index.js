function getFaqItems() {
	return Array.from(document.querySelectorAll('.faq__question')).map(faqQuestion => ({
		questionElement: faqQuestion,
		answerElement: faqQuestion.querySelector('.faq__answer'),
		titleElement: faqQuestion.querySelector('.faq__question-title')
	}));
}

function initEventListenerPriceForm() {
	const form = document.querySelector('.price__form');

	form.addEventListener('submit', event => {
		event.preventDefault();
		const formData = new FormData(form);
		const ouputData = Object.fromEntries(formData.entries()); // данные для отправки на сервер

		// console.log(Array.from(formData.entries()));
		console.log(ouputData);
	});
}

function initEventListenersFaq() {
	const faqItems = getFaqItems();

	for (const faqItem of faqItems) {
		faqItem.titleElement.addEventListener('click', () => {
			faqItem.questionElement.classList.toggle('faq__question_active')
		});
	}
}

document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.querySelector('.price__link.btn_blue');
  const dialog = document.querySelector('.price-dialog');
  const phoneInput = document.querySelector('.price__right-input[name="phone"]');
  const outputDiv = document.querySelector('.price-dialog__output');


  if (!submitButton || !dialog || !phoneInput || !outputDiv) {
    console.error('Не найдены необходимые элементы!');
    return;
  }

  submitButton.addEventListener('click', function(e) {
    e.preventDefault(); 

    if (!phoneInput.value.trim()) {
      alert('Пожалуйста, введите номер телефона!');
      return;
    }

    outputDiv.textContent = `Ваш номер: ${phoneInput.value}`;

    dialog.showModal();
  });

  dialog.addEventListener('click', function(e) {
    if (e.target === dialog) {
      dialog.close();
    }
  });
});

initEventListenersFaq();
initEventListenerPriceForm();