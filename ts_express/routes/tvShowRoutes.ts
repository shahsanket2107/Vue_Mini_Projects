import { Router, Request, Response } from "express";
import {
    getTvShows,
    getTvShowById,
    addTvShow,
    updateTvShow,
    deleteTvShow
} from "../db/tvShowDb";
import { TVShow } from "../models/tvShowModel";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json(getTvShows());
});

router.get("/:id", (req: Request, res: Response) => {
    const tvShowId = parseInt(req.params.id);
    const tvShow = getTvShowById(tvShowId);
    if (tvShow) {
        res.status(200).json(tvShow);
    } else {
        res.status(400).json({ "error": "TV show not found" });
    }
});

router.post("/", (req: Request, res: Response) => {
    const newShow: TVShow = req.body;
    addTvShow(newShow);
    res.status(201).json(newShow);
});

router.put("/:id", (req: Request, res: Response) => {
    const updatedShow: TVShow = req.body;
    const success = updateTvShow(updatedShow);
    if (success) {
        res.status(200).json(updatedShow);
    } else {
        res.status(400).json({ "error": "TV show not found" });
    }
});

router.delete("/:id", (req: Request, res: Response) => {
    const tvShowId = parseInt(req.params.id);
    const success = deleteTvShow(tvShowId);
    if (success) {
        res.status(200).json({ "message": "TV show deleted" });
    } else {
        res.status(400).json({ "error": "TV show not found" });
    }
});

export default router;
