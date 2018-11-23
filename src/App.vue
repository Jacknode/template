<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
//    this.$nextTick(()=>{
//      document.addEventListener('click',()=>{
//        let appMain = document.querySelector('.el-menu')
//        let elSubmenu = appMain.querySelectorAll('.el-submenu')
//        for(var i=0;i<elSubmenu.length;i++){
//          let newArr = elSubmenu[i].classList
//          for(var j=0;j<newArr.length;j++){
//            console.log(newArr[j])
//            if(newArr[j].includes('is-active')){
//              console.log(1)
//              elSubmenu[i].classList.remove('is-active')
//              elSubmenu[i].classList.add('is-opened')
//              let elMenu = elSubmenu[i].querySelector('.el-menu')
//              console.log(elMenu)
//              elMenu.style = 'background-color: rgb(48, 65, 86);'
//            }
//          }
//
//        }
//      })
//    })
  }
}
</script>
<style>
  p {
    padding: 0;
  }
</style>
