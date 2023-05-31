import { html } from "../../node_modules/lit-html/lit-html.js";
import { addFruit } from "../data/getData.js";
import { createSubmitHandler } from "../utils.js";

const createTemp = (onAddFruit) => html`
<section id="create">
  <div class="form">
    <h2>Add Fruit</h2>
    <form @submit=${onAddFruit} class="create-form">
      <input type="text" name="name" id="name" placeholder="Fruit Name" />
      <input
        type="text"
        name="imageUrl"
        id="Fruit-image"
        placeholder="Fruit Image"
      />
      <textarea
        id="fruit-description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="fruit-nutrition"
        name="nutrition"
        placeholder="Nutrition"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add Fruit</button>
    </form>
  </div>
</section>`;


export async function createView(ctx) {
    ctx.render(createTemp(createSubmitHandler(onAddFruit)));

    async function onAddFruit({name, imageUrl, description, nutrition}) {
        if ([name, imageUrl, description, nutrition].some(n => n == '')) {
            return alert('All fields are required')
        }

        await addFruit({name, imageUrl, description, nutrition});

        ctx.page.redirect('/fruits')
    }
}
