<template>
  <div>
    <header class="bg-yellow p-5">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="">Kenneth's HOBO</h1>

        <ul class="list-reset inline-block">
          <li
            v-for="(link, index) in headerLinks" :key="index"
            class="inline-block p-2"
          >
            <a :href="link.url">{{ link.text }}</a>
            <span v-if="index+1 < headerLinks.length">|</span>
          </li>
        </ul>
      </div>
    </header>

    <section class="bg-blue ">
      <div class="container mx-auto flex items-center justify-start">
        <div class="max-w-xs py-20">
          <h1 class="mb-4">Tittel</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero excepturi nemo minima itaque. Explicabo, voluptates animi itaque saepe aliquid exercitationem dicta, autem nostrum, odit obcaecati in iure iusto necessitatibus a!</p>
        </div>
      </div>
    </section>

    <section>
      <ul class="list-reset container mx-auto flex">
        <li
          v-for="(product, index) in products"
          :key="index"
          class="w-1/3 m-10 p-6 bg-yellow rounded-lg"
        >
          <h2>{{ product.title }}</h2>
          <p>{{ product.text }}</p>
        </li>
      </ul>
    </section>

    <section>
      <div class="container mx-auto flex justify-center my-16">
        <div class="max-w-xs">
          <h2 class="mb-4">{{ blockContent.title }}</h2>
          <p>{{ blockContent.text }}</p>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      headerLinks: [
        { text: 'Home', url: '/' },
        { text: 'About', url: '/' },
        { text: 'Contact', url: '/' },
      ],
      products: [
        { title: 'Product #1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero excepturi nemo minima itaque. Explicabo, voluptates animi itaque saepe aliquid exercitationem dicta, autem nostrum, odit obcaecati in iure iusto necessitatibus' },
        { title: 'Product #2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero excepturi nemo minima itaque. Explicabo, voluptates animi itaque saepe aliquid exercitationem dicta, autem nostrum, odit obcaecati in iure iusto necessitatibus' },
        { title: 'Product #3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero excepturi nemo minima itaque. Explicabo, voluptates animi itaque saepe aliquid exercitationem dicta, autem nostrum, odit obcaecati in iure iusto necessitatibus' },
      ],
      blockContent: {
        title: 'Tittel og tekst',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero excepturi nemo minima itaque. Explicabo, voluptates animi itaque saepe aliquid exercitationem dicta, autem nostrum, odit obcaecati in iure iusto necessitatibus'
      }
    }
  },
  components: {
  }
}
</script>

