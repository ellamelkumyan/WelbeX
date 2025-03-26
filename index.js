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

initEventListenersFaq();
initEventListenerPriceForm();