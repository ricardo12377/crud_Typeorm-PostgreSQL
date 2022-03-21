import { getRepository } from 'typeorm';
import { Category } from '../entities/category'
import { Video } from '../entities/videos'

type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}

export class CreateVideoService {

    async execute({name, description, duration, category_id}: VideoRequest): Promise<Error | Video > {
        const repoVideo = getRepository(Video);
        const repoCategory = getRepository(Category)

        if(!await repoCategory.findOne(category_id)) {
            return new Error("category does not exists")
        }

        const video = repoVideo.create({name, description, duration, category_id});

        await repoVideo.save(video);

        return video;
    }
}