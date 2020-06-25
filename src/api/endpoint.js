export default {
	blog: {
        get_all_blogs: 'http://127.0.0.1:8000/api/blog',
        get_specific_blog: 'http://127.0.0.1:8000/api/blog',
        create_blog: 'http://127.0.0.1:8000/api/blog',
        update_blog: process.env.VUE_APP_API_URL,
        delete_blog: process.env.VUE_APP_API_URL
    },
}