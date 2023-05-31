import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { getUserData } from "./utils.js";
import { layoutTemp } from "./views/layout.js";
import { homePageView } from "./views/homeView.js";
import { catalogView } from "./views/catalogView.js";
import { registerView } from "./views/registerView.js";
import { logout } from "./data/auth.js";
import { loginView } from "./views/loginView.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { searchView } from "./views/searchPage.js";
import { searchFruit } from "./data/getData.js";

const root = document.getElementById('wrapper');

page(decorateCtx);
page('index.html', '/');
page('/', homePageView);
page('/fruits', catalogView);
page('/register', registerView);
page('/login', loginView);
page('/addfruit', createView);
page('/fruits/:id', detailsView);
page('/edit/:id', editView);
page('/search', searchView);
page('/logout', logoutFunc);

window.api = {searchFruit}

page.start();

function decorateCtx(ctx, next) {
    ctx.render = renderViews;
    next();
}

function renderViews(content) {
    const userData = getUserData();
    render(layoutTemp(userData, content), root)
}

function logoutFunc(ctx) {
    logout();
    ctx.page.redirect('/')
}