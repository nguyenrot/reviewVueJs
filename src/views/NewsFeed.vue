<template>
  <div class="container-fluid">
    <h3>Home Page</h3>
    <new-post :reload_posts="getPosts" ></new-post>
    <Posts v-for="post in posts" :key="post.id">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">{{ post.creator }}</h5>
        <button class="btn btn-danger" v-if="post.creator === getUser" @click="handleDelete(id)">x</button>
      </div>
      <h6 class="card-subtitle mb-2 text-muted">{{ getCreated_at(post.created_at) }}</h6>
      <p class="card-text">{{post.content}}</p>
    </Posts>
  </div>
</template>

<script>
import NewPost from "@/components/layouts/NewPost";
import Posts from "@/components/layouts/Posts"
import {mapGetters} from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      posts: [],
    }
  },
  computed: {
    ...mapGetters(['getToken','getUser']),
  },
  components: {
    newPost: NewPost,
    Posts
  },
  methods:{
    handleDelete(id){
      const configs = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.getToken}`
        }
      }
      this.axios.delete(`http://127.0.0.1:8000/post/${id}`, configs).then(() => {

      })
      .catch((e) => {
        console.log(e)
      })
    },
    getPosts(){
      const configs = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.getToken}`
        }
      }
      this.axios.get('http://127.0.0.1:8000/post/', configs).then((response) => {
        this.posts = response.data
      })
          .catch((e) => {
            console.log(e)
          })
    },
    getCreated_at(time){
      return moment(time).fromNow()
    }
  },
  created() {
    this.getPosts()
  }
}
</script>

<style>

</style>