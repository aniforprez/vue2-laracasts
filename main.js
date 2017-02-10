Vue.component('message', {
	props: ['title', 'body'],
	template: `
		<article class="message" v-show="isVisible">
			<div class="message-header">
				<p>{{ title }}</p>
				<button class="delete" @click="hideMessage"></button>
			</div>
			<div class="message-body">
				{{ body }}
			</div>
		</article>
	`,
	data() {
		return {
			isVisible: true
		}
	},
	methods: {
		hideMessage() {
			this.isVisible = false;
		}
	}
});

Vue.component('task-list', {
	template: '<ul><task v-for="task in tasks">{{ task.description }}</task></ul>',

	data() {
		return {
			tasks: [
				{ description: 'Do something', completed: false },
				{ description: 'Do nothing', completed: true },
				{ description: 'Do anything', completed: true },
				{ description: 'Whatever', completed: false }
			]
		}
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>'
});

let app = new Vue({
	el: '#root',
	data: {
		title: 'This is some bullshit',
		newName: '',
		message: 'Hello World',
		names: ['Ani', 'Avi', 'Amma', 'Accha'],
		className: 'colorRed',
		isLoading: false,
		isDisabled: false,
		tasks: [
			{ description: 'Do something', completed: false },
			{ description: 'Do nothing', completed: true },
			{ description: 'Do anything', completed: true },
			{ description: 'Whatever', completed: false }
		]
	},
	methods: {
		addName() {
			this.names.push(this.newName);
			this.newName = '';
		},
		toggleClass() {
			this.isLoading = !this.isLoading;
		},
		toggleDisabled() {
			this.isDisabled = !this.isDisabled;
		}
	},
	computed: {
		reversedMessage() {
			return this.message.split('').reverse().join('');
		},
		incompleteTasks() {
			return this.tasks.filter((task) => !task.completed);
		}
	}
});
