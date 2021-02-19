<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
          >
            Show
          </router-link>

          <a href="#" class="btn btn-link">Edit</a>

          <button
            type="button"
            @click.prevent.stop="deleteRestaurants(restaurant.id)"
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 8,
      name: "Louisa Cummerata MD",
      tel: "1-734-755-5111 x47387",
      address: "6622 Johnson Wall",
      opening_hours: "08:00",
      description: "Nostrum magni sit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.944417729082055",
      viewCounts: 11,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-02-12T13:01:05.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 9,
      name: "Esteban Conn",
      tel: "(925) 432-9834 x4118",
      address: "2245 Jalon Vista",
      opening_hours: "08:00",
      description: "Magnam autem sed id molestiae nihil quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.434835967288935",
      viewCounts: 57,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-24T06:46:42.000Z",
      CategoryId: 1,
      Category: null,
    },
    {
      id: 10,
      name: "Eulalia Schoen",
      tel: "301.236.0532",
      address: "5595 Golden Turnpike",
      opening_hours: "08:00",
      description:
        "Aut sequi rerum ad ipsum ea et velit cumque. Qui dolorum recusandae sit voluptas.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.12063922584056",
      viewCounts: 2,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-09T16:19:05.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 11,
      name: "April Romaguera",
      tel: "1-821-165-9840 x63700",
      address: "7071 Jackson Knolls",
      opening_hours: "08:00",
      description:
        "Quo expedita perferendis sint quae voluptatem libero totam. Assumenda ea sed neque doloribus qui excepturi nihil. Fuga vel et alias maiores dolor a. Magni doloremque molestiae saepe et eligendi qui. Quibusdam aut nisi alias qui voluptatibus. Tempore suscipit eligendi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.6707359779192",
      viewCounts: 9,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-09T15:28:07.000Z",
      CategoryId: 1,
      Category: null,
    },
    {
      id: 12,
      name: "Merl Wolf",
      tel: "1-848-603-6470 x7813",
      address: "0233 Lura Bridge",
      opening_hours: "08:00",
      description: "Facilis aspernatur sint odit deleniti et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.10281112790923",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 13,
      name: "Arvel Boehm",
      tel: "1-747-219-7889 x2070",
      address: "605 Pouros Terrace",
      opening_hours: "08:00",
      description:
        "Perferendis ut sed velit quaerat voluptatem ea quia. Sequi quia culpa ut officia omnis minus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.572223030594074",
      viewCounts: 3,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-02-12T09:17:57.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 14,
      name: "Maud Quitzon",
      tel: "1-381-928-4146 x7139",
      address: "4710 Turcotte Falls",
      opening_hours: "08:00",
      description: "rerum ipsa sint",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.63607690617653",
      viewCounts: 6,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-08T18:27:35.000Z",
      CategoryId: 2,
      Category: null,
    },
    {
      id: 15,
      name: "Christopher Nienow",
      tel: "960.013.0776 x727",
      address: "81586 Mathilde Greens",
      opening_hours: "08:00",
      description: "et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.53990579386272",
      viewCounts: 14,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-09T14:38:50.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 16,
      name: "Syble Abbott",
      tel: "017.576.7286",
      address: "7407 Schuppe Wall",
      opening_hours: "08:00",
      description:
        "Et temporibus doloribus qui est tempora est. Et consectetur assumenda quia minima suscipit. Sint vero consequatur cum ullam suscipit numquam. Harum et consectetur. Ut dolorem quam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.87564642221516",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 17,
      name: "Miss Stephen Sawayn",
      tel: "1-935-583-1943 x8155",
      address: "3077 Darrion Wells",
      opening_hours: "08:00",
      description: "officiis voluptatem placeat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.52831928971565",
      viewCounts: 1,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-10T17:06:19.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 18,
      name: "Alverta Kiehn",
      tel: "(566) 311-3714",
      address: "500 Lind Pass",
      opening_hours: "08:00",
      description: "Labore unde itaque sequi amet similique commodi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.2037785436574087",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 1,
      Category: null,
    },
    {
      id: 19,
      name: "Trycia Brakus",
      tel: "722-709-6029",
      address: "979 Savion Plaza",
      opening_hours: "08:00",
      description:
        "Et suscipit fuga qui ut alias. Minima perspiciatis dolorem ut et voluptas amet et consequatur. Minus amet totam veritatis et animi eveniet doloremque. Ipsum impedit iure ab quo ipsam doloremque consequuntur cum. Sed in vero magni ut et quod quod quos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.02043508160996",
      viewCounts: 1,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-13T11:31:06.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 20,
      name: "Kaleigh Predovic",
      tel: "681-366-1294 x013",
      address: "351 Bonnie Underpass",
      opening_hours: "08:00",
      description: "omnis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.978313952200253",
      viewCounts: 3,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-24T06:09:18.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 21,
      name: "Murphy Luettgen",
      tel: "009.091.3706",
      address: "63796 Mohr Union",
      opening_hours: "08:00",
      description:
        "Sed commodi et vitae ratione. Minus qui et eligendi magnam et itaque voluptate. Nisi nisi ea nemo et. Aut id quod sint magnam similique et.\n \rQuas beatae libero rerum atque mollitia quis ut. Et expedita omnis qui eum et ut eos. Sed nihil quam iste.\n \rAdipisci reprehenderit deserunt dolore maxime. Consequatur et at delectus voluptates nesciunt atque facere. Et et minima deleniti quasi quo molestiae. Et possimus veritatis sint debitis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.51998236538115",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 2,
      Category: null,
    },
    {
      id: 22,
      name: "Bradley King MD",
      tel: "655.492.4760 x73746",
      address: "3972 Murray Plains",
      opening_hours: "08:00",
      description: "Qui sunt quas sapiente ipsam sed eaque ut rerum eos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.290857858649836",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 2,
      Category: null,
    },
    {
      id: 23,
      name: "Al Lakin",
      tel: "602-151-7956",
      address: "37069 Alberta Overpass",
      opening_hours: "08:00",
      description:
        "Voluptates similique quod eos unde illum id qui voluptas exercitationem. Fuga autem quisquam odit quam qui dolores temporibus tenetur. Velit eveniet modi itaque quaerat. Fugiat expedita sit vel fugiat fugiat ut cumque optio sit. Necessitatibus repudiandae quam. Modi et itaque aut aspernatur molestiae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.73691514360379",
      viewCounts: 1,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-08T11:36:13.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 26,
      name: "Carson Collins",
      tel: "471-440-3141",
      address: "1632 Marietta Summit",
      opening_hours: "08:00",
      description: "aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.4841358103108",
      viewCounts: 8,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-10T17:37:30.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 28,
      name: "Darrion Heaney",
      tel: "321.110.3263 x381",
      address: "02721 Sarai Estates",
      opening_hours: "08:00",
      description: "Omnis nam qui a quam similique quaerat quaerat et rem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.6301461653418",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 2,
      Category: null,
    },
    {
      id: 29,
      name: "Heidi Hills",
      tel: "990.448.8313 x28638",
      address: "754 Myah Spurs",
      opening_hours: "08:00",
      description:
        "Atque quis autem et quod ea maiores.\nVoluptatem similique sit aliquid omnis rem et.\nAut aperiam est quod quibusdam qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.31146126664737",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 1,
      Category: null,
    },
    {
      id: 30,
      name: "Adella Beier",
      tel: "1-783-490-1787 x9508",
      address: "601 Sarina Station",
      opening_hours: "08:00",
      description:
        "Sed harum soluta illo eum commodi numquam. Tempore in tempore eum sunt aperiam cum optio. Debitis eos voluptatem vitae omnis tenetur voluptatem. Praesentium molestias sed aspernatur quo quis et dolore aut accusamus. Necessitatibus cumque blanditiis occaecati similique ex fugiat dolores distinctio.\n \rRem dolorem voluptatem dolor odio officia. Unde totam sed laborum cum. Voluptates et nihil sit ab. Voluptatem dolores nam et velit corporis rerum non reiciendis. Rerum accusamus blanditiis sequi aut asperiores quas quo.\n \rAutem omnis totam ut. Sit sed doloremque impedit quos quia quo illo perferendis. Atque maiores dolor. Debitis officiis est et aut quisquam aut debitis. Eligendi iure ut. Qui quaerat aspernatur corporis saepe omnis repudiandae repudiandae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.463502950499326",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 1,
      Category: null,
    },
    {
      id: 31,
      name: "Elroy Fay",
      tel: "702.175.7764 x4946",
      address: "98347 Reginald Shoal",
      opening_hours: "08:00",
      description: "quidem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.96407087921388",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 32,
      name: "Ismael Davis",
      tel: "(910) 474-5755",
      address: "85565 Devon Vista",
      opening_hours: "08:00",
      description:
        "Rerum ea eum eaque eum sit sint exercitationem. Quia quas velit soluta dolore eius rerum consequatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.23235299994717",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 1,
      Category: null,
    },
    {
      id: 33,
      name: "Darrell Heathcote",
      tel: "(082) 347-8052 x78579",
      address: "468 Brooks Shoal",
      opening_hours: "08:00",
      description: "voluptas voluptate laboriosam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.94089318572208",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 2,
      Category: null,
    },
    {
      id: 34,
      name: "Desiree Turner",
      tel: "(136) 698-7228 x8145",
      address: "52609 Witting Key",
      opening_hours: "08:00",
      description: "ab",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.88630742520563",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 1,
      Category: null,
    },
    {
      id: 35,
      name: "Elbert Crooks",
      tel: "(256) 244-1709 x484",
      address: "014 Emilia Islands",
      opening_hours: "08:00",
      description:
        "Ipsa commodi enim tempora veritatis delectus autem ipsam quo qui.\nMinima quis aut non aspernatur.\nSoluta ducimus ipsa dolores ipsam veritatis sit.\nLaboriosam dolore non reprehenderit quibusdam facilis minima ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.28831374116059",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 2,
      Category: null,
    },
    {
      id: 36,
      name: "Abel Rogahn IV",
      tel: "933-901-1731 x269",
      address: "38490 Hickle Fork",
      opening_hours: "08:00",
      description: "dolor",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.715555525014935",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 38,
      name: "Hope Haag",
      tel: "660.610.3903",
      address: "17593 Lea Forge",
      opening_hours: "08:00",
      description:
        "Et numquam accusamus accusantium aut deleniti.\nVoluptatem omnis ut hic non tenetur dolor.\nSuscipit nostrum architecto et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.35509178326073",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 2,
      Category: null,
    },
    {
      id: 39,
      name: "Filiberto Armstrong",
      tel: "(136) 189-7401 x6258",
      address: "1977 Rosie Freeway",
      opening_hours: "08:00",
      description: "quibusdam numquam et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.67470243442469",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 40,
      name: "Weldon Parker",
      tel: "902-698-6168 x9734",
      address: "3979 Ryan Curve",
      opening_hours: "08:00",
      description:
        "Distinctio ut mollitia nostrum. Consequatur dolores voluptatem amet qui corporis tenetur earum. Omnis repellendus enim.\n \rNeque optio quisquam autem consequatur velit porro. Aliquam iure magni ut earum. Ut recusandae non repudiandae quidem doloribus. Officiis quia suscipit nisi animi autem.\n \rAspernatur molestiae et. Et eum consequuntur. At rerum rerum quaerat culpa dolor. Vel omnis at velit repudiandae. Officiis perspiciatis qui voluptas quis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=25.659382269167264",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 2,
      Category: null,
    },
    {
      id: 41,
      name: "Viola Dickinson",
      tel: "(981) 787-9710 x4515",
      address: "752 Koch River",
      opening_hours: "08:00",
      description: "ea quidem occaecati",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.95476669228548",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 2,
      Category: null,
    },
    {
      id: 42,
      name: "Elfrieda Kihn",
      tel: "(368) 179-5889 x228",
      address: "65552 Doris Meadows",
      opening_hours: "08:00",
      description: "Illum maiores aut consequuntur at.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=94.29520649655446",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 43,
      name: "Maureen Abbott",
      tel: "1-116-713-7053",
      address: "6288 Reva Rapids",
      opening_hours: "08:00",
      description:
        "Excepturi velit recusandae dolorem similique consequatur vero.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.077830366186829",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 1,
      Category: null,
    },
    {
      id: 44,
      name: "Rowland Dibbert",
      tel: "(157) 271-3956 x171",
      address: "4603 McKenzie Cove",
      opening_hours: "08:00",
      description:
        "Autem reprehenderit omnis.\nIncidunt aliquid rerum non rem ea et.\nCommodi quia expedita quae est optio qui voluptatem deleniti.\nCum dolore et nihil soluta.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=94.86386729862659",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 47,
      name: "Oren Mraz DVM",
      tel: "144-372-2263 x314",
      address: "71871 Adah Via",
      opening_hours: "08:00",
      description: "laudantium",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.416043775162582",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 2,
      Category: null,
    },
    {
      id: 3222,
      name: "123",
      tel: "",
      address: "",
      opening_hours: "",
      description: "",
      image: null,
      viewCounts: 0,
      createdAt: "2021-01-24T08:29:02.000Z",
      updatedAt: "2021-01-24T08:29:02.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
    {
      id: 3227,
      name: "test Name",
      tel: "12345678",
      address: "test Address",
      opening_hours: "01:00",
      description: "test Description",
      image: null,
      viewCounts: 0,
      createdAt: "2021-02-05T07:25:57.000Z",
      updatedAt: "2021-02-05T07:25:57.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-12-15T06:35:43.000Z",
        updatedAt: "2020-12-15T06:35:43.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurants(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>