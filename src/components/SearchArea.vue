<template>
  <div class="form-group">
    <label for="inputEmail" class="col-lg-2 control-label">Search Music</label>
    <div class="col-lg-10">
      <input type="text" class="form-control" id="inputEmail" placeholder="Type here" @input="keyPressed">
    </div>
  </div>
</template>

<script>

    import axios from 'axios';

    export default {

      data() {

        return {
          newSet: [],
        }

      },

      methods: {
        keyPressed(event) {
          var key = event.target.value;

          axios.get("https://api.spotify.com/v1/search?q="+key+"&type=track")
            .then(response => {
              this.newSet = response.data.tracks.items;
              console.log(this.newSet)
            })
            .catch(e => {
              this.errors.push(e)
            })

          this.$emit('newDataset', this.newSet);
        }
      }
    }
</script>

<style>

   #app {

   }
</style>

