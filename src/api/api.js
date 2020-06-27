import endpoints from './endpoint'
import axios from 'axios'

export default {

    async getAllBlogs() {
        return await axios.get( endpoints.blog.get_all_blogs )
    },

    async getAllDeletedBlogs() {
        return await axios.get( endpoints.blog.deleted_blog )
    },    

    async getSpecificBlog(id) {
        return await axios.get( endpoints.blog.get_specific_blog + id )
    },

    async createNewBlog(params) {
        return await axios.post( endpoints.blog.create_blog, params )
    },

    async updateSpecificBlog(params) {
        return await axios.put( endpoints.blog.update_blog + '/' + params.id, params )
    },

    async deleteSpecificBlog(params) {
        return await axios.delete( endpoints.blog.delete_blog + '/' + params.id, params )
    },

    async restoreSpecificBlog(id) {
        return await axios.put( endpoints.blog.restore_deleted + '/' + id, id )
    },

    async searchBlog(params) {
        return await axios.post( endpoints.blog.search_blog, params )
    }

}