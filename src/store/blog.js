import Api from '../api/api'
import { getField, updateField } from 'vuex-map-fields'

const state = {
    blogs: [],
}

const getters = {
    getField,
    blogs: (state) => state.blogs,
}

const actions = {
    async getAllBlogs({commit}) {
        let response = await Api.getAllBlogs()
        commit('onOkAllBlogs', response.data);
    },

    async getSpecificBlog(payload) {
        let response = await Api.getSpecificBlog();
        console.log(response.data, payload)
    },

    async addNewBlog() {
        alert(11)
    },
}

const mutations = {
    updateField,
    onOkAllBlogs(state, data) {
        state.blogs = data.data
    },

}

export const blog = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}