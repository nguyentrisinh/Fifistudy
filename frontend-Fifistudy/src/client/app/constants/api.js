export const Api = {
    getPromote: `api/promotes/get_all/`,
    getLastest: `api/films/get_all_order_by_save_number/`,
    getMostView: `api/films/get_all_order_by_view/`,
    getFilm: (slug) => {
        return `api/films/detail/slug/?film_slug=${slug}`
    },
    getEpisode: (filmSlug, episodeId) => {
        return `api/episodes/detail/?film_slug=${filmSlug}&episode_number=${episodeId}/`
    }
}

// slug/?film_slug=<slug></slug>