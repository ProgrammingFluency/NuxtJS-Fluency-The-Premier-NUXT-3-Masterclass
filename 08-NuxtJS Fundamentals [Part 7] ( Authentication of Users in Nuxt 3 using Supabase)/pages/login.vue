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
        <br>
        <button @click="logIn">Login</button>

        <br>
        <br>


        <button @click="googleLogin">
            Login With Google
        </button>

        <br>
        <br>


        <button @click="githubLogin">Login With Github</button>


        <div v-if="successMsg">
                <h1> {{ successMsg }} </h1>
        </div>
             <!-- Error Message -->
        <div v-if="errorMsg">
            <h1>{{ errorMsg }}</h1>
        </div>
    </div>
</template>


<script setup>
    const supabase = useSupabaseClient()
    const email = useState(() => null)
    const password = useState(() => null)
    const user = useSupabaseUser()
    const successMsg = useState(() => false)
    const errorMsg = useState(() => false)


    if(user.value) await navigateTo('/')


    const logIn = async () => {
        const {data, error} = await supabase.auth.signInWithPassword({
                email: email.value,
                password: password.value
            })
            if(error){
                successMsg.value = null
                errorMsg.value = error.message
                console.log(error)
                return
            }
           
            errorMsg.value = null
            successMsg.value = 'Redirecting...'
            setTimeout(async () => {
                successMsg.value = null
                await navigateTo('/')
            }, 2000)
           
    }

    const googleLogin = async () => {
       
       const { data, error } = await supabase.auth.signInWithOAuth({
       provider: 'google'
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
           await navigateTo('/')
       }, 2000)
   }

   const githubLogin = async () => {
       
       const { data, error } = await supabase.auth.signInWithOAuth({
       provider: 'github'
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
           await navigateTo('/')
       }, 2000)
   }


</script>