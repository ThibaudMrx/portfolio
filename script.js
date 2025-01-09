// Turns pages when clicking next or prev button
const turnPageButton = document.querySelectorAll('.nextprev-btn');

turnPageButton.forEach((el, index) => {
	el.onclick = () => {
		const pageTurnId = el.getAttribute('data-page');
		const pageTurn = document.getElementById(pageTurnId);

		console.log('Page tournee : index ', index);
		console.log('pageTurnId ', pageTurnId);
		console.log('pageTurn ', pageTurn);

		if (pageTurn.classList.contains('turn')) {
			pageTurn.classList.remove('turn');
			setTimeout(() => {
				pageTurn.style.zIndex = 20 - index;
				printZIndexes();
			}, 500);
		} else {
			pageTurn.classList.add('turn');
			setTimeout(() => {
				pageTurn.style.zIndex = 20 + index;
				printZIndexes();
			}, 500);
		}
	};
});

function printZIndexes() {
	const pages = document.querySelectorAll('.book-page');
	pages.forEach((page) => {
		console.log(`Page ID: ${page.id}, zIndex: ${page.style.zIndex}`);
	});
}

// Contact me button
const pages = document.querySelectorAll('.book-page.page-right');
const conactMeButton = document.querySelector('.btn.contact-me');

conactMeButton.onclick = () => {
	pages.forEach((page, index) => {
		setTimeout(() => {
			page.classList.add('turn');
			setTimeout(() => {
				page.style.zIndex = 20 + index;
			}, 500);
		}, (index + 1) * 200 + 100);
	});
};

// Create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
	pageNumber--;
	if (pageNumber < 0) {
		pageNumber = totalPages - 1;
	}
}

// Back to profile button
const backToProfileButton = document.querySelector('.back-profile');

backToProfileButton.onclick = () => {
	pages.forEach((_, index) => {
		setTimeout(() => {
			reverseIndex();
			pages[pageNumber].classList.remove('turn');

			setTimeout(() => {
				reverseIndex();
				pages[pageNumber].style.zIndex = 10 + index;
			}, 500);
		}, (index + 1) * 200 + 100);
	});
};

// Opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// Opening animation (Cover right animation)
setTimeout(() => {
	coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
	coverRight.style.zIndex = -1;
}, 2800);

// Opening animation (Profile page animation)
setTimeout(() => {
	pageLeft.style.zIndex = 20;
}, 3200);

// Opening animation (All pages right animation)
pages.forEach((_, index) => {
	setTimeout(() => {
		reverseIndex();
		pages[pageNumber].classList.remove('turn');

		setTimeout(() => {
			reverseIndex();
			pages[pageNumber].style.zIndex = 10 + index;
		}, 500);
	}, (index + 1) * 200 + 2100);
});
