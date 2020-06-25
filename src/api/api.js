import endpoints from './endpoint'
import axios from 'axios'

export default {

    async getAllBlogs() {
        return await axios.get( endpoints.blog.get_all_blogs )
    },

    async getSpecificBlog(id) {
        return await axios.post( endpoints.blog.get_specific_blog + id )
    },

    async createNewBlog(params) {
        return await axios.post( endpoints.blog.create_blog, params )
    },

    async updateBlog(params) {
        return await axios.put( endpoints.blog.update_blog, params )
    },

    async deleteBlog(params) {
        return await axios.delete( endpoints.blog.delete_blog, params )
    },

}