import { mapGetters } from 'vuex';
//stae нужен для того что бы работать с перменными глобально




export const state = () => ({
  cards: [{
    image: null
  }],
  api: 'http://localhost:1000'
})




// mutations нужен для того что бы изменять перменные в state 
export const mutations = {
  SET_DATA(state, data){
    const updata = data.map((element)=>{
      element.image = `${state.api}/img/${element.image}`
      return element
    })
    state.cards = updata
  }
}


// нужен в основном что бы взаимодействовать с api 
export const actions = {
  getData({state, commit}) {
    return new Promise((resolve, reject) => {
      fetch(`${state.api}/cards_get`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Ошибка при выполнении запроса');
          }
        })
        .then(data => {
          // Обработка полученных данных
          commit("SET_DATA", data)
          resolve();
         
  
        })
        .catch(error => reject(error));
    });
    
  }
}

export const getters = {

}
