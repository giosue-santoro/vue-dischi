new Vue ({

    el: '#app',

    data: {
        list:[],
		dinamicIndex: 0,
        generi: [],
        select: 'all'
    },

    mounted() {
		const self = this;
    
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
          .then((re) => {

			self.list.push(re.data.response)
            self.list = re.data.response

            self.list.forEach((el) => {
                if (!self.generi.includes(el.genre)) {
                  self.generi.push(el.genre)
                }
            })
            
            console.log(self.list);
            console.log(self.generi);
        })
        
    }

})

Vue.config.devtools = true; 