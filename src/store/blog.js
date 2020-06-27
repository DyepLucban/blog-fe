import Api from '../api/api'
import { getField, updateField } from 'vuex-map-fields'

const state = {
    blogs: [],
    deleted_blogs: [],
}

const getters = {
    getField,
    blogs: (state) => state.blogs,
    deleted_blogs: (state) => state.deleted_blogs,
}

const actions = {
    async getAllBlogs({commit}) {
        let response = await Api.getAllBlogs()
        commit('onOkAllBlogs', response.data);
    },

    async getAllDeletedBlogs({commit}) {
        let response = await Api.getAllDeletedBlogs()
        commit('onOkDeletedBlogs', response.data);
    },

    async addNewBlog({}, params) {
        return await Api.createNewBlog(params)
    },

    async updateBlog({}, params) {
        return await Api.updateSpecificBlog(params)
    },

    async deleteBlog({}, params) {
        return await Api.deleteSpecificBlog(params)
    },

    async restoreDeleteBlog({}, id) {
        return await Api.restoreSpecificBlog(id)
    },

    async searchBlog({commit}, params) {
        let response = await Api.searchBlog(params)
        commit('onOkAllBlogs', response.data);
    },
}

const mutations = {
    updateField,
    onOkAllBlogs(state, data) {
        state.blogs = data.data
    },
    onOkDeletedBlogs(state, data) {
        state.deleted_blogs = data.data
    },


}

export const blog = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}