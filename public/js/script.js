/** @format */

var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

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
// HEADER
var headerBar = document.getElementById('header-bar');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

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
// HEADER


const btn = document.querySelector('#bt-save');

btn.addEventListener('click', function () {
	window.alert('Sneaker adicionado com sucesso!');
});