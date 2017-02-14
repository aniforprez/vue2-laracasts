<template>
	<div id="app">
		<counter></counter>
		<hr>

		<message>Yo what up</message>
	</div>
</template>

<script>
	import Message from './components/Message.vue';
	import Counter from './components/Counter.vue'

	export default {
		name: 'app',
		data () {
			return {

			}
		},
		components: { Message, Counter }
	}
</script>

<style>

</style>
