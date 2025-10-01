import express, { Request, Response } from "express";
import { FilmFullInfo } from "../types";

const router = express.Router();

const films: FilmFullInfo[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160,
    description: "Un voleur qui infiltre les rêves pour dérober des secrets.",
    imageUrl: "https://example.com/inception.jpg",
  },
  {
    id: 2,
    title: "Le Seigneur des Anneaux : La Communauté de l’Anneau",
    director: "Peter Jackson",
    duration: 178,
    budget: 93,
    description: "Un hobbit doit détruire l’Anneau unique.",
    imageUrl: "https://example.com/lotr1.jpg",
  },
  {
    id: 3,
    title: "Parasite",
    director: "Bong Joon-ho",
    duration: 132,
    budget: 11,
    description: "Une famille pauvre infiltre la maison d’une famille riche.",
    imageUrl: "https://example.com/parasite.jpg",
  },
];

router.get("/", (_req: Request, res: Response) => {
  return res.status(200).json(films);
});

export default router;