import { getRepository } from "typeorm";
import { Video } from "../entities/videos";


export class GetAllVideosService {
    async execute() {
        const repo = getRepository(Video);

        const videos = await repo.find({
            relations: ['category']
        });

        return videos
    }
}