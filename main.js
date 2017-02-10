Vue.component('progress-view', {
	data() {
		return {
			progressDone: 50
		};
	}
});

Vue.component('modal2', {
	template: `
		<div class="modal">
			<div class="modal-background"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">
						<slot name="header"></slot>
					</p>
					<button class="delete"></button>
				</header>
				<section class="modal-card-body">
					<slot name="content"></slot>
					<slot>Default content here</slot>
				</section>
				<footer class="modal-card-foot">
					<slot name="footer"></slot>
				</footer>
			</div>
		</div>
	`
})

Vue.component('coupon', {
	data() {
		return {
			code: ''
		}
	},
	template: `<input class="input" @blur="onCouponApplied" v-model="code">`,
	methods: {
		onCouponApplied() {
			if(this.code) {
				this.$emit('coupon-applied', this.code);
			}
		}
	}
});

Vue.component('tabs', {
	template: `
		<div>
			<div class="tabs">
				<ul>
					<li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
						<a href="#" @click="switchToTab(tab)">{{ tab.name }}</a>
					</li>
				</ul>
			</div>

			<div class="tab-content">
				<slot></slot>
			</div>
		</div>
	`,
	data() {
		return {
			tabs: []
		};
	},
	methods: {
		switchToTab(selectedTab) {
			this.tabs.forEach((tab) => {
				tab.isActive = (tab.name == selectedTab.name);
			});
			selectedTab.selected = true;
		}
	},
	created() {
		this.tabs = this.$children;
	}
});

Vue.component('tab', {
	template: `
		<div v-show="isActive"><slot></slot></div>
	`,
	props: {
		name: {
			required: true
		},
		selected: {
			default: false
		}
	},
	data() {
		return {
			'isActive': false
		}
	},

	mounted() {
		this.isActive = this.selected;
	}
})


Vue.component('modal', {
	template: `
		<div class="modal is-active">
			<div class="modal-background"></div>
			<div class="modal-content">
				<div class="box">
					<slot></slot>
				</div>
			</div>
			<button class="modal-close" @click="$emit('close')"></button>
		</div>
	`
})

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
		],
		showModal: false,
		couponApplied: false,
		couponCode: ''
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
		},
		onCouponApplied(couponCode) {
			this.couponApplied = true;
			this.couponCode = couponCode;
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
