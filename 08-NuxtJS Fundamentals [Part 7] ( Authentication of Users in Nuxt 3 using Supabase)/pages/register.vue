<script setup>
    const supabase = useSupabaseClient()
    const user = useSupabaseUser()
    const email = useState(() => null)
    const password = useState(() => null)
    const userName = useState(() => null)
    const address = useState(() => null)
    const successMsg = useState(() => false)
    const errorMsg = useState(() => false)


    if(user.value) {
        await navigateTo('/')
    }


    const signUp = async () => {
       
        const { data, error } = await supabase.auth.signUp(
            {
                email: email.value,
                password: password.value,
                options: {
                data: {
                    full_name: userName.value,
                    address: address.value
                },
                emailRedirectTo: 'http://localhost:3000/'
                }
            })
            if(error){
                successMsg.value = null
                errorMsg.value = error.message
                return
            }
           
            errorMsg.value = null
            successMsg.value = 'Redirecting...'
            setTimeout(async () => {
                successMsg.value = null
                await navigateTo('/confirm')
            }, 2000)
    }


</script>


<template>
    <div>
        <label >Email address</label>
        <br>
        <input v-model="email" type="email" />
        <br>
        <label >Password</label>
        <br>
        <input v-model="password" type="password" />
        <br>
        <label >User Name</label>
        <br>
        <input v-model="userName" type="text"/>
        <br>
        <label >Address</label>
        <br>
        <input v-model="address" type="text" />
        <br>
        <br>








        <button @click="signUp">Register</button>


        <div v-if="successMsg">
                <h1> {{ successMsg }} </h1>
        </div>
             <!-- Error Message -->
        <div v-if="errorMsg">
            <h1>{{ errorMsg }}</h1>
        </div>
    </div>
</template>