<template>

  <div class="container">
    <div class="row">
  <form class="form-horizontal">
    <fieldset>
      <legend>Music App</legend>
      <app-search @newDataset = "results = $event"></app-search>
    </fieldset>
  </form>
    </div>

    <div class="row">
      <div class="col-md-12">
        <app-result :resList="results"></app-result>

      </div>
    </div>

  </div>
</template>

<script>

   import SearchArea from './SearchArea'
   import ResultArea from './ResultArea'

   export default {

     data() {

       return {
         results: []
       }
     },

     components: {
       'app-search': SearchArea,
       'app-result': ResultArea
     }
   }




</script>

<style>

</style>
