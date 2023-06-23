<template>
    <div class="catalog">
        <div class="container">
            <h1 class="catalog__title ">
                Каталог товаров
            </h1>
            <div class="catalog-filters  ">
                <div class="catalog-filters-item" @click="filter_card(1)" v-bind:class="{ 'active': this.cards[0].id_type === 1 }">
                    <img src="/img/filters/1.png" alt="" class="img">
                    <img src="/img/filters/1_activ.png" alt="" class="img_activ">
                    <p>Гардеробы и Шкафы</p>
                </div>
                <div class="catalog-filters-item" @click = "filter_card(2)">
                    <img src="/img/filters/2.png" alt="" class="img">
                    <img src="/img/filters/2_activ.png" alt="" class="img_activ">
                    <p>Кухонная мебель</p>
                </div>
                <div class="catalog-filters-item" @click = "filter_card(3)">
                    <img src="/img/filters/3.png" alt="" class="img">
                    <img src="/img/filters/3_activ.png" alt="" class="img_activ">
                    <p>Спальная мебель</p>
                </div>
                <div class="catalog-filters-item" @click = "filter_card(4)">
                    <img src="/img/filters/4.png" alt="" class="img">
                    <img src="/img/filters/4_activ.png" alt="" class="img_activ">
                    <p>Офисная мебель</p>
                </div>
                <div class="catalog-filters-item" @click = "filter_card(5)">
                    <img src="/img/filters/5.png" alt="" class="img">
                    <img src="/img/filters/5_activ.png" alt="" class="img_activ">
                    <p>Мебель для гостинной</p>
                </div>
            </div>
            <div class="catalog-cards">
                <div class="cards-items card" style="width: 18rem;" v-for="el of this.local_cards.cards">
                    <img :src="el.image" class="card-img-top" alt="">
                    <div class="card-body1">
                        <h5 class="card-title text-center">{{ el.name }}</h5>
                        <p class="card-price text-center">
                            Цена {{ el.price }}
                        </p>
                        <a href="#" class="btn card-button button" >Заказать</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'


export default {
    async mounted() { // mounted это функция которая прям в начале запуска сайта 
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            this.getData().then(()=>{
                console.log("до")
                console.log(this.cards_filter)
                this.cards_filter.cards = this.cards
                console.log("после")
                console.log(this.cards_filter)
                
                this.filter_card(1)
                
             
                
            })
            // setTimeout(()=>{
            //     this.filter_card()
            //     console.log("this.filter_card")
            //     console.log(this.cards_filter)
            // },2000)
            setTimeout(() => {
                this.$nuxt.$loading.finish()
            }, 1000);
            console.log("this.filter_card")
            console.log(this.cards_filter)
            console.log(this.local_cards);

           
        });

    },
    data() {
        return {
            title: 'Привет, мир!',
            description: 'Это мой компонент.',
            cards_filter: {
                id: 'all',
                cards: []
            },
            local_cards: []
        };
    },
    computed: {
        ...mapState({
            cards: (state) => state.catalog.cards
        }),
    },
    methods: {
        ...mapActions({
            getData: 'catalog/getData'
        }),
        filter_card(id = 'all') {
            console.log(id);
            function checkID (id, cards = this.cards_filter, data = this.cards) {
                console.log("this.filter_card")
                console.log(cards)
                console.log('function checkID ');
                console.log(id);
                if (id === cards.id || id === 'all') {
                    cards.cards = data
                    return cards
                } else {
                    // cards.cards = data.map((el) => {
                    //     // if (el.id_type === id) {
                    //     //     return el
                    //     // }
                    //     // return el
                    // })
                    let element_clear = [] 
                    console.log('ELSE cards.cards');
                    console.log(cards.cards);
                    data.map((element1)=>{
                        console.log('el');
                        console.log(element1.id_type === id)
                        if(element1.id_type === id){
                            element_clear.push(element1)
                        }
                    })
                   
                    cards.cards = element_clear
                    console.log('ELSE cards')
                    console.log(cards);
                    cards.id = id
                    return cards
                }
            }
            
            this.local_cards = checkID(id, this.cards_filter, this.cards)

        }
    }
};
</script>
  
<style scoped>
/* Стили для вашего компонента */
</style>