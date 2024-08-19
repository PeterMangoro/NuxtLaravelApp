<script setup >

const q = ref('')
const search = refDebounced(q, 1000);
const router = useRouter()

const page = ref(1)

const {data, refresh} = await useFetch(()=>`/api/users`, {
    key: `userlist-${page.value}`,
    params: { search,page } 
})

function refetch(pageNumber){
    page.value = pageNumber
    refresh()
}

function clean(params) {
  page.value = 1
  refresh()
}

</script>

<template>
  <div>
    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
      <UInput v-model="q" @change="clean" placeholder="Filter people..." />
    </div>
    <UTable :rows="data.data" />

    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
      
      <UPagination 
  :ui="{ wrapper: 'justify-center'}" 
  v-model="page" 
  :page-count="data.meta.per_page" 
  :total="data.meta.total"
  @click="refetch(page)"
  :to="(page) => ({
      query: { page },
      // Hash is specified here to prevent the page from scrolling to the top
      // hash: '#links',
    })"
/>
    </div>
  </div>
</template>

