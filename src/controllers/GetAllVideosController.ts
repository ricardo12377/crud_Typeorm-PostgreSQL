import { Request, Response } from "express";
import { GetAllVideosService } from "../services/GetAllVidedosService";

export class GetAllVideosController {
    async handle(request: Request, response: Response) {
        const service = new GetAllVideosService();

        const videos = service.execute();

        return response.json(videos)
    }
}