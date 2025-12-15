<script lang="ts">
	import Product from '$lib/components/Product.svelte';
	const email = 'adrian@riseandrevelbakehouse.com';
	import SuperDebug, { superForm } from 'sveltekit-superforms';

	const { data } = $props();
	const { form, errors, constraints, message } = superForm(data.form);
</script>

<div>
	<!-- <div class="logo-container"> -->
	<!-- 	<img class="logo" src={'/src/logo.png'} /> -->
	<!-- </div> -->
	<!-- <span> For inquiries, you can reach Adrian at: </span> -->
	<!-- <a href={'mailto:' + email}>{email}</a> -->

	{#if $message}<h3>{$message}</h3>{/if}

	<form method="POST">
		<label for="name">
			Full Name:
			<input type="text" name="name" bind:value={$form.name} />
		</label>
		<label for="email">
			Email Address:
			<input type="email" name="email" bind:value={$form.email} />
		</label>
		<label for="message">
			Message:
			<input name="message" type="text" bind:value={$form.message} />
		</label>
		<button type="submit">Submit</button>
	</form>

	<SuperDebug data={$form} />
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
	.logo {
		object-fit: cover;
	}

	form {
		display: flex;
		flex-direction: column;
	}
</style>
