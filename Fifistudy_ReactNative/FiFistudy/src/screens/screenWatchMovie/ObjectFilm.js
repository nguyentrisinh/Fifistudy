// ObjectFilm cho man hinh xem film
let objFilm = {
    ID: 1,
    titleEnglish: 'Big Hero 6 (2014)',
    titleVietnamese: 'Biệt đội Big Hero 6',
    episode: 3,
    filmUrl: 'http://.....mp4',
    listEpisode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    comments: [
        {
            ID: 1,
            user: 'phuongnl',
            userAvatar: 'https://pa1.narvii.com/6050/fad4357478fcec436572e5df33519711d45245d5_hq.gif',
            firstName: 'Phuong',
            lastName: 'Nguyen Lan',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            isLiked: true,
            likedNum: 3,
            dateTime: '5 giờ',
        },
        {
            ID: 1,
            user: 'akihito',
            userAvatar: 'https://i.pinimg.com/736x/94/62/34/946234d0d10db26a88f6d08df9142e9d--kyoukai-no-kanata.jpg',
            firstName: 'Akihito',
            lastName: 'Kanbara',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            isLiked: false,
            likedNum: 10,
            dateTime: 'Hôm qua',
        },
        {
            ID: 1,
            user: 'mirai',
            userAvatar: 'https://vignette.wikia.nocookie.net/csydes-test/images/6/6b/%28AnimeFreak%29_Mirai_Kuriyama.png/revision/latest?cb=20170404065736',
            firstName: 'Mirai',
            lastName: 'Kuriyama',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            isLiked: false,
            likedNum: 0,
            dateTime: '31/12/2017',
        }
    ]
};
export default objFilm;