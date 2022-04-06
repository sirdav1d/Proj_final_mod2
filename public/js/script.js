const header = document.getElementById('header');
const navigationHeader = document.getElementById('navigation_header');
const content = document.getElementById('content');
const showSidebar = false;

function toggleSidebar() {
	showSidebar = !showSidebar;
	if (showSidebar) {
		navigationHeader.style.marginLeft = '-10vw';
		navigationHeader.style.animationName = 'showSidebar';
		content.style.filter = 'blur(2px)';
	} else {
		navigationHeader.style.marginLeft = '-100vw';
		navigationHeader.style.animationName = '';
		content.style.filter = '';
	}
}

function closeSidebar() {
	if (showSidebar) {
		showSidebar = true;
		toggleSidebar();
	}
}

window.addEventListener('resize', function (event) {
	if (window.innerWidth > 820 && showSidebar) {
		showSidebar = true;
		toggleSidebar();
	}
});


toggleSidebar();
closeSidebar();
