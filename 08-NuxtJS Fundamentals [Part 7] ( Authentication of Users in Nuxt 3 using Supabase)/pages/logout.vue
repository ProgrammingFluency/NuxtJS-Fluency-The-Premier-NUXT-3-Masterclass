<template>
    <div>
        <button @click="logOut">Logout</button>


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
    const user = useSupabaseUser()
    const supabase = useSupabaseClient()
    const successMsg = useState(() => null)
    const errorMsg = useState(() => null)


    const logOut = async () => {
        const { error } = await supabase.auth.signOut()
        if(error) {
            errorMsg.value = error.message
            return
        }
        successMsg.value = 'Hope to see you again soon, Redericting...'
        setTimeout(async () => {
            successMsg.value = null
            await navigateTo('/')
        },2000)
    }
    definePageMeta({
        middleware: [
            async () => {
                const user = useSupabaseUser()
                if(!user) return await navigateTo('/login')
            },
        ]
    })


</script>