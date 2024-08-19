<script setup >
import { object, string } from 'yup'
const { login } = useSanctumAuth();

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})


const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit (event) {
  // Do something with event.data
  await login(state);
}
</script>

<template>
  <div class="max-w-lg m-auto h-screen flex flex-col justify-center  gap-5  p-5">
    
    <UCard class="my-auto">
    <template #header>
          <h2 class="text-2xl font-semibold">Sign Up</h2>
        
        <p>email: {{ state.email }}</p>
        <p>password: {{ state.password }}</p>
    </template>
     
    
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
   
    
    </UCard>
    </div>   
 
</template>

