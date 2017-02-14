<template>
	<div>
		<h2>The count is {{ count }}</h2>
		<button @click="count += 1">Increment</button>
	</div>
</template>

<script>
	export default {
		name: 'counter',
		data() {
			return {
				count: 1
			}
		}
	}
</script>