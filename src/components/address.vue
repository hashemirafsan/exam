<template>
	<div class="addresses">
		<div class="container">
		  <div class="jumbotron">
		  	<ul>
			  	<router-link :to="{name: 'profile_edit', params: {id: profile_id}}"><li>edit</li></router-link>
			  	<router-link :to="{name: 'profile', params: {id: profile_id}}"><li>Show Profile</li></router-link>
		  	</ul>   
		    <h1>Addresses</h1>      
		   		<div v-if="nothingToShow == true">
		   			<div class="alert alert-warning">
  						<strong>Nothing To Show. Go to Edit or Update your profile</strong> 
					</div>
		   		</div>
		    
		  </div>   

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nothingToShow: false,
				profile_id: this.$route.params.id
			}
		}, 
		mounted() {
			
			let getUserdata = 'http://profile.authlab.io/api/v1/addresses?user_id='+this.$route.params.id;
			axios.get(getUserdata)
				.then((response) => {
					if(response.data.length <= 0) {
						this.nothingToShow = true
					}
				})
		}
	}
</script>
<style>
	ul li {
		list-style: none;
		float: right;
		margin-right: 10px
	}
</style>