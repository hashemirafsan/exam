<template>
	<div class="login">  
		  <div class="container">
		    <label><b>Username</b></label>
		    <input type="text" placeholder="Enter Username" name="uname" required v-model="username">

		    <label><b>Password</b></label>
		    <input type="password" placeholder="Enter Password" name="psw" required v-model="password">
		        
		    <button type="submit" @click="login">Login</button>
		    <input type="checkbox" checked="checked"> Remember me
		  </div>
		  	<div class="alert alert-danger" v-if="error == 1">
  				<strong>Email Or Password is wrong!</strong> 
			</div>
	</div>


</template>

<script>

	export default {
		data() {
			return {
				username: '',
				password: '',
				error: ''
			}
		},
		methods: {
			login() {
				let Loginurl = 'http://profile.authlab.io/api/v1/login';
				let data = {
					email: this.username,
					password: this.password
				}
				axios.post(Loginurl,data)
					.then((response) => {
						let id = response.data.id
						if(response.status === 200){
							this.$router.push({
                                name: 'profile',
                                params: {
                                	id: id
                                }
                            })
						} else {
							this.error = 1
						}
					})
			}
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