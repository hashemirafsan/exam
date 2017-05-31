<template>
	<div class="profile"> 
		<div class="container">
		    <label><b>First Name</b></label>
		    <input type="text" placeholder="Enter First Name" name="uname" v-model="first_name">

		    <label><b>Last Name</b></label>
		    <input type="text" placeholder="Enter Last Name" name="uname" v-model="last_name">

		    <label><b>Email</b></label>
		    <input type="text" placeholder="Enter Email" name="uname" v-model="email">
		        
		    <button type="submit">Login</button>
		  </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				first_name: '',
				last_name: '',
				email: ''
			}
		},
		methods: {
			setData(param1) {
				param1.first_name = this.first_name
				param1.email = this.email
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

input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
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

