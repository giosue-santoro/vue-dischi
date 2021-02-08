new Vue ({

    el: '#app',

    data: {
        list:[],
		dinamicIndex: 0
    },

    methods: {

        
     

    },

    mounted() {
		const self = this;
    
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
          .then((re) => {

			self.list.push(re.data.response)
            console.log(re.data);
			console.log(this.list);

        })
    },

})

Vue.config.devtools = true; 