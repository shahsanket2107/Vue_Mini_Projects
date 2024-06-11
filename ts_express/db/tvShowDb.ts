import { TVShow } from "../models/tvShowModel";

const tvShows: TVShow[] = [
    {
        id: 1,
        name: "Friends",
        ratings: [],
        episodes: []
    },
    {
        id: 2,
        name: "The Big Bang Theory",
        ratings: [],
        episodes: []
    },
    {
        id: 3,
        name: "Two and a Half Men",
        ratings: [],
        episodes: []
    }
];

export const getTvShows = (): TVShow[] => tvShows;

export const getTvShowById = (id: number): TVShow | undefined => {
    return tvShows.find(show => show.id === id);
};

export const addTvShow = (newShow: TVShow): void => {
    tvShows.push(newShow);
};

export const updateTvShow = (updatedShow: TVShow): boolean => {
    const index = tvShows.findIndex(show => show.id === updatedShow.id);
    if (index !== -1) {
        tvShows[index] = updatedShow;
        return true;
    }
    return false;
};

export const deleteTvShow = (id: number): boolean => {
    const index = tvShows.findIndex(show => show.id === id);
    if (index !== -1) {
        tvShows.splice(index, 1);
        return true;
    }
    return false;
};
