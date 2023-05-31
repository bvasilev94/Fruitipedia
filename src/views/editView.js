import { html } from "../../node_modules/lit-html/lit-html.js";
import { getById, updateFruit } from "../data/getData.js";
import { createSubmitHandler } from "../utils.js";

const editTemp = (fruit, onSubmit) => html`<section id="edit">
<div class="form">
  <h2>Edit Fruit</h2>
  <form @submit=${onSubmit} class="edit-form">
    <input
      type="text"
      .value=${fruit.name}
      name="name"
      id="name"
      placeholder="Fruit Name"
    />
    <input
      type="text"
      .value=${fruit.imageUrl}
      name="imageUrl"
      id="Fruit-image"
      placeholder="Fruit Image URL"
    />
    <textarea
      id="fruit-description"
      .value=${fruit.description}
      name="description"
      placeholder="Description"
      rows="10"
      cols="50"
    ></textarea>
    <textarea
      id="fruit-nutrition"
      .value=${fruit.nutrition}
      name="nutrition"
      placeholder="Nutrition"
      rows="10"
      cols="50"
    ></textarea>
    <button type="submit">post</button>
  </form>
</div>
</section>`

export async function editView(ctx) {
    const id = ctx.params.id;
    const fruit = await getById(id);
    ctx.render(editTemp(fruit, createSubmitHandler(onSubmit)));

    async function onSubmit({name, imageUrl, description, nutrition}){
      if ([name, imageUrl, description, nutrition].some(n => n == '')) {
        return alert('All fields are required')
    }

    await updateFruit(id, {name, imageUrl, description, nutrition});

    ctx.page.redirect('/fruits')
    }
}