<template>
	<div class="showprofile"> 
		<div class="container">
		  <div class="jumbotron">
		  	<ul>
			  	<router-link :to="{name: 'profile_edit', params: {id: profile_id}}"><li>edit</li></router-link>
			  	<router-link :to="{name: 'profile_address', params: {id: profile_id}}"><li>Address</li></router-link>
		  	</ul>   
		    <h1>Profile</h1>      
		    <p>First Name: {{first_name}}</p>
		    <p>Last Name: {{last_name}}</p>
		    <p>Email: {{email}}</p>
		    <p>Birthday: {{dob}}</p>
		    <p>Gender: {{gender}}</p>
		    
		  </div>   

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				first_name: '',
				last_name: '',
				email: '',
				dob: '',
				gender: '',
				profile_id: ''
			}
		},
		methods: {
			setData(param1) {
				this.profile_id = param1.id
				param1.first_name !== null ? this.first_name = param1.first_name : this.first_name = 'Edit your first name'
				param1.last_name !== null ? this.last_name = param1.last_name : this.last_name = 'Edit your last name'
				param1.email !== null ? this.email = param1.email : this.email = 'Edit your email'
				param1.date_of_birth !== null ? this.dob = param1.date_of_birth : this.dob = 'Edit your Birthday'
				param1.gender !== null ? this.gender = param1.gender : this.gender = 'Edit your gender'
			}
		},
		mounted() {
			let getUserdata = 'http://profile.authlab.io/api/v1/user?user_id='+this.$route.params.id;
			axios.get(getUserdata)
				.then((response) => {
					this.setData(response.data)
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