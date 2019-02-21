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
  async asyncData({ params }) {

    const headerLinks = await sanity.fetch(`
      *[_type == "headerLink"] | order(sortIndex) {
        text,
        url
      }
    `)

    console.log(params.slug)

    const page = await sanity.fetch(`
      *[_type == "page" && slug.current == "${params.slug}"] | order(_updatedAt desc) {
        headerImage,
        headerTitle,
        headerText,
        footerTitle,
        footerText,
      }[0]
    `)

    console.log('page', page)

    return {
      headerImageUrl: builder.image(page.headerImage),
      headerLinks,
      headerContent: {
        title: page.headerTitle,
        text: page.headerText,
      },
      footerContent: {
        title: page.footerTitle,
        text: page.footerText,
      },
    }
  },
  components: {
  }
}
</script>

