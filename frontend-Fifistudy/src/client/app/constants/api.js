export const Api = {
    getPromote: `api/promotes/get_all/`,
    getMostSave: `api/films/get_all_order_by_save_number/`,
    getMostView: `api/films/get_all_order_by_view/`,
    getFilm: (slug) => {
        return `api/films/detail/slug/${slug}`
    },
    getEpisode: (filmSlug, episodeId) => {
        return `api/episodes/detail/${filmSlug}/${episodeId}/`
    }
}