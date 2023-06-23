export default function({store, redirect}){
    const currentUser = {
      user: store.state.log.user
    }
    if (!currentUser.user){ // Если пользователь пустой то его возвращает на /log/signin
      return redirect('/log/signin')
    }
}
