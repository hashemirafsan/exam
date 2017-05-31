<template>
	<div class="profile"> 
		<div class="container">
			<div v-if="profileSucess == true">
	   			<div class="alert alert-success">
						<strong>Successfully Saved your data</strong> 
				</div>
		   	</div>
		    <label><b>First Name</b></label>
		    <input type="text" placeholder="Enter First Name" name="uname" v-model="first_name">

		    <label><b>Last Name</b></label>
		    <input type="text" placeholder="Enter Last Name" name="uname" v-model="last_name">

		    <label><b>Email</b></label>
		    <input type="text" placeholder="Enter Email" name="uname" v-model="email">

		    <label><b>Birthday</b></label>
		    <input type="date"  name="uname" v-model="dob">
			

			 <label><b>Gender</b></label>
		    <input type="radio" id="one" value="Male" v-model="gender">
			<label for="one">Male</label>
			<input type="radio" id="two" value="Female" v-model="gender">
			<label for="two">Female</label>
			<input type="radio" id="three" value="Other" v-model="gender">
			<label for="three">Other</label>
		        
		    <button type="submit" @click="RequestUpadate">Update</button>
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
				dob:'',
				gender:'',
				profileSucess: false
			}
		},
		methods: {
			setData(param1) {
				param1.first_name !== null ? this.first_name = param1.first_name : this.first_name = 'Edit your first name'
				param1.last_name !== null ? this.last_name = param1.last_name : this.last_name = 'Edit your last name'
				param1.email !== null ? this.email = param1.email : this.email = 'Edit your email'
				param1.date_of_birth !== null ? this.dob = param1.date_of_birth : this.dob = 'Edit your Birthday'
				param1.gender !== null ? this.gender = param1.gender : this.gender = 'Edit your gender'
			},
			RequestUpadate() {
				let getUserdata = 'http://profile.authlab.io/api/v1/user?user_id='+this.$route.params.id;
				let data = {
					first_name: this.first_name,
					last_name: this.last_name,
					email: this.email,
					gender: this.gender,
					date_of_birth: this.dob
				}
				axios.post(getUserdata, data)
					.then((response) => {
						if(response.status == 200) {
							this.profileSucess = true
						}
					})
			}
		},
		mounted() {
			let getUserdata = 'http://profile.authlab.io/api/v1/user?user_id='+this.$route.params.id;
			axios.get(getUserdata)
				.then((response) => {
					console.log(response)
					this.setData(response.data)
				})
		}
	}
</script>

<style scoped>
	form {
    border: 3px solid #f1f1f1;
}

input[type=text], input[type=password], input[type=date] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

input[type=radio] {
	display: inline-block;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

button:hover {
    opacity: 0.8;
}

.cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
}

.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
}

img.avatar {
    width: 40%;
    border-radius: 50%;
}

.container {
    padding: 16px;
}

span.psw {
    float: right;
    padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
    span.psw {
       display: block;
       float: none;
    }
    .cancelbtn {
       width: 100%;
    }
}
</style>

