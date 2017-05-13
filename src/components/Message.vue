<template>
	<div class="message">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'message'
	}
	</script>

	<style>
	.message {
		background-color: #e3e3e3;
	}
</style>