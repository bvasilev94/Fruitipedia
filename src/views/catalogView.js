import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFruits } from "../data/getData.js";

const catalogTemp = (fruits) => html`<!-- Dashboard page -->
  <h2>Fruits</h2>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${fruits.length > 0
      ? fruits.map(fruitTemp)
      : html`<h2>No fruit info yet.</h2>`}
  </section>`;

const fruitTemp = (fruit) => html`<div class="fruit">
  <img src=${fruit.imageUrl} alt="example1" />
  <h3 class="title">${fruit.name}</h3>
  <p class="description">${fruit.description}</p>
  <a class="details-btn" href="/fruits/${fruit._id}">More Info</a>
</div>`;

export async function catalogView(ctx) {
  const fruits = await getAllFruits();
  ctx.render(catalogTemp(fruits));
}
