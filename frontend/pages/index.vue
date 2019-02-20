<template>
  <div>
    <header class="bg-yellow p-5">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="">Kenneth's HOBO</h1>

        <ul class="list-reset inline-block">
          <li
            v-for="(link, index) in headerLinks"
            :key="index"
            class="inline-block p-2"
          >
            <a :href="link.url">{{ link.text }}</a>
            <span v-if="index+1 < headerLinks.length">|</span>
          </li>
        </ul>
      </div>
    </header>

    <section :style="`background-image: url(${headerImageUrl})`"  class="bg-cover bg-center ">
      <div class="container mx-auto flex items-center justify-start">
        <div class="max-w-xs py-32 text-yellow">
          <h1 class="mb-4">{{ headerContent.title }}</h1>
          <p>{{ headerContent.text }}</p>
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
          <h2 class="mb-4">{{ product.title }}</h2>
          <p>{{ product.text }}</p>
        </li>
      </ul>
    </section>

    <section>
      <div class="container mx-auto flex justify-center my-16">
        <div class="max-w-xs text-center">
          <h2 class="mb-4">{{ footerContent.title }}</h2>
          <p>{{ footerContent.text }}</p>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const sanity = sanityClient({
// Find your project ID and dataset in `sanity.json` in your studio project
  projectId: 'qigcwxlf',
  dataset: 'production',
  useCdn: false
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
});

const builder = imageUrlBuilder(sanity)

export default {
  async asyncData() {

    const headerLinks = await sanity.fetch(`
      *[_type == "headerLink"] | order(sortIndex) {
        text,
        url
      }
    `)

    const products = await sanity.fetch(`
      *[_type == "product"] | order(_updatedAt desc) {
        title,
        text
      }[0...3]
    `)

    const frontpage = await sanity.fetch(`
      *[_type == "frontpage"] | order(_updatedAt desc) {
        headerImage,
        headerTitle,
        headerText,
        footerTitle,
        footerText,
      }[0]
    `)

    return {
      headerImageUrl: builder.image(frontpage.headerImage),
      headerLinks,
      // headerLinks: [
      //   { text: 'Home', url: '/' },
      //   { text: 'About', url: '/' },
      //   { text: 'Contact', url: '/' },
      // ],
      products,
      // products: [
      //   { title: 'Product #1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero excepturi nemo minima itaque. Explicabo, voluptates animi itaque saepe aliquid exercitationem dicta, autem nostrum, odit obcaecati in iure iusto necessitatibus' },
      //   { title: 'Product #2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero excepturi nemo minima itaque. Explicabo, voluptates animi itaque saepe aliquid exercitationem dicta, autem nostrum, odit obcaecati in iure iusto necessitatibus' },
      //   { title: 'Product #3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero excepturi nemo minima itaque. Explicabo, voluptates animi itaque saepe aliquid exercitationem dicta, autem nostrum, odit obcaecati in iure iusto necessitatibus' },
      // ],
      headerContent: {
        title: frontpage.headerTitle,
        text: frontpage.headerText,
      },
      footerContent: {
        title: frontpage.footerTitle,
        text: frontpage.footerText,
      },
    }
  },
  components: {
  }
}
</script>

