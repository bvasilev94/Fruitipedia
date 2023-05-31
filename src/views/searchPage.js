import { html } from "../../node_modules/lit-html/lit-html.js";
import { searchFruit } from "../data/getData.js";
import { createSubmitHandler } from "../utils.js";

let resultData = [];

const searchTemp = (fruits, onSearch) => html` 
<section id="search">
  <div class="form">
    <h2>Search</h2>
    <form @submit=${onSearch} class="search-form">
      <input type="text" name="search" id="search-input" />
      <button class="button-list">Search</button>
    </form>
  </div>
  <h4>Results:</h4>
  <div class="search-result">
    ${resultData.length > 0 ? resultData.map(foundFruitsTemp) : html `<p class="no-result">No result.</p> `}
  </div>
</section>`;

const foundFruitsTemp = (fruit) => html `<div class="fruit">
<img src=${fruit.imageUrl} alt="example1" />
<h3 class="title">${fruit.name}</h3>
<p class="description">
  ${fruit.description}
</p>
<a class="details-btn" href="/fruits/${fruit._id}">More Info</a>
</div>`


export async function searchView(ctx) {
    ctx.render(searchTemp(resultData, createSubmitHandler(onSearch)));

    async function onSearch({search}){
        resultData = await searchFruit(search);
        ctx.render(searchTemp(resultData, createSubmitHandler(onSearch)));
    }
}