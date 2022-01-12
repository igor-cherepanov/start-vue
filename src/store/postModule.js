export const postModule = {
    state: () => ({
        posts: [],
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        pagesCount: 0,
        sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
        ],
    }),
    getters: {},
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setIsPostsLoading(state, isPostsLoading) {
            state.isPostsLoading = isPostsLoading
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setPage(state, page) {
            state.page = page
        },
        setLimit(state, limit) {
            state.limit = limit
        },
        setPagesCount(state, pagesCount) {
            state.pagesCount = pagesCount
        },
        setSortOptions(state, sortOptions) {
            state.sortOptions = sortOptions
        },
    },
    actions: {}
}