<script lang="ts">
	import Product from '$lib/components/Product.svelte';
	const email = 'adrian@riseandrevelbakehouse.com';
	import SuperDebug, { superForm } from 'sveltekit-superforms';

	const { data } = $props();
	const { form, errors, constraints, message } = superForm(data.form);
</script>

<div class="content">
	<div class="logo-container">
		<img class="logo" src={'/src/logo-cropped.png'} />
	</div>
	<span>
		For inquiries, you can reach Adrian at <a href={'mailto:' + email}>{email}</a> or visit our
		<a href="https://bakesy.shop/b/rise-revel-bakehouse">shop</a>.
	</span>
	<div class="gallery">
		<img src="/src/mini-loaves-1.jpg" alt="" />
		<img src="/src/cookie-1.jpg" alt="" />
		<img src="/src/pumpkin-danishes.jpg" alt="" />
		<img src="/src/mini-loaves-2.jpg" alt="" />
	</div>

	<!-- {#if $message}<h3>{$message}</h3>{/if} -->
	<!---->
	<!-- <form method="POST"> -->
	<!-- 	<label for="name"> -->
	<!-- 		Full Name: -->
	<!-- 		<input type="text" name="name" bind:value={$form.name} /> -->
	<!-- 	</label> -->
	<!-- 	<label for="email"> -->
	<!-- 		Email Address: -->
	<!-- 		<input type="email" name="email" bind:value={$form.email} /> -->
	<!-- 	</label> -->
	<!-- 	<label for="message"> -->
	<!-- 		Message: -->
	<!-- 		<input name="message" type="text" bind:value={$form.message} /> -->
	<!-- 	</label> -->
	<!-- 	<button type="submit">Submit</button> -->
	<!-- </form> -->
	<!---->
	<!-- <SuperDebug data={$form} /> -->
</div>

<!-- NEW STUFF -->

<!-- <div> -->
<!-- 	<div class="sidebar"> -->
<!-- 		<div class="sidebar-content"> -->
<!-- 			<nav> -->
<!-- 				<ul class="categories"> -->
<!-- 					<li>All Items</li> -->
<!-- 					<li>Break</li> -->
<!-- 					<li>Baked Goods</li> -->
<!-- 				</ul> -->
<!-- 			</nav> -->
<!-- 		</div> -->
<!-- 	</div> -->
<!-- 	<div class="products-grid"> -->
<!-- 		{#each Array(8)} -->
<!-- 			<a class="product-link" href="/product/sourdough" style="display:contents"> -->
<!-- 				<div class="product"> -->
<!-- 					<img src={'/src/loaf.jpeg'} alt="a loaf of classic white fourdough" /> -->
<!-- 					<span class="name">Classic White Sourdough</span> -->
<!-- 					<span class="price">$12.00</span> -->
<!-- 				</div> -->
<!-- 			</a> -->
<!-- 		{/each} -->
<!-- 	</div> -->
<!-- </div> -->
<!---->
<!-- <style> -->
<!-- 	.sidebar { -->
<!-- 		& .sidebar-content { -->
<!-- 		} -->
<!-- 	} -->
<!---->
<!-- 	.products-grid { -->
<!-- 		display: grid; -->
<!-- 		grid-template-columns: 1fr 1fr 1fr; -->
<!-- 		gap: 2em; -->
<!-- 	} -->
<!---->
<!-- 	.product { -->
<!-- 		display: flex; -->
<!-- 		flex-direction: column; -->
<!---->
<!-- 		& img { -->
<!-- 			object-fit: cover; -->
<!-- 			width: 100%; -->
<!-- 		} -->
<!---->
<!-- 		& .name { -->
<!-- 		} -->
<!---->
<!-- 		& .price { -->
<!-- 		} -->
<!-- 	} -->
<!-- </style> -->

<style>
	:global(body) {
		width: 100%;
		height: 100svh;
		display: grid;
		place-items: center;
		margin: 0;
		font-family: 'Crimson Text', serif;
		text-align: center;
		font-size: 1.125rem;
	}

	.content {
		max-width: 500px;
		width: fit-content;
		height: fit-content;
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding: 0.5em;
	}

	.gallery {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5em;
		& img {
			width: 100%;
			aspect-ratio: 1;
			object-fit: cover;
		}
	}

	.logo-container {
		display: grid;
		place-items: center;
		overflow: hidden;
		.logo {
			width: 100%;
			max-width: fit-content;
			object-position: center;
		}
	}

	form {
		display: flex;
		flex-direction: column;
	}
</style>
