const navBtns = document.querySelectorAll(".navigation__button");
const pages = document.querySelectorAll(".page");
const homeTitle = document.querySelector(".home-page__main-title");
const homeSubtitle = document.querySelector(".home-page__subtitle");

const btnsArr = [...navBtns];
const pagesArr = [...pages];

const changeActivePage = (e) => {
	let btnClicked = e.target.innerText;
	let chosenPage = pagesArr.find((page) => page.classList.contains(btnClicked));
	let otherPages = pagesArr.filter((page) => page !== chosenPage);

	chosenPage.classList.add("active-page");
	otherPages.forEach((page) => page.classList.remove("active-page"));

	changeActiveButton(e);
};

const changeActiveButton = (e) => {
	let btnClicked = e.target;
	let otherBtns = btnsArr.filter((btn) => btn !== btnClicked);

	btnClicked.classList.add("navigation__button--active");
	otherBtns.forEach((btn) => btn.classList.remove("navigation__button--active"));

	changeHomeAnimations();
};

const changeHomeAnimations = () => {
	homeTitle.classList.add("main-title-second-animation");
	homeSubtitle.classList.add("subtitle-second-animation");
};

navBtns.forEach((btn) => btn.addEventListener("click", changeActivePage));
