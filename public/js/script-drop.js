/** @format */

const viewdrop = () => {
	const buttons = document.querySelectorAll('.drop-btn');

	buttons.forEach((btn) => {
		btn.addEventListener('click', (event) => {
			const contentDrop = event.path[2].children[1];

			contentDrop.classList.toggle('active');

			if (contentDrop.classList.contains('active')) {
				contentDrop.style.display = 'block';
			} else {
				contentDrop.style.display = 'none';
			}

			contentDrop.addEventListener('mouseleave', () => {
				contentDrop.classList.remove('active');
				if (!contentDrop.classList.contains('active')) {
					contentDrop.style.display = 'none';
				}
			});
		});
	});
};

viewdrop();